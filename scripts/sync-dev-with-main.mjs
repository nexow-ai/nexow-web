#!/usr/bin/env node
/**
 * Back-merge main into dev after a main release so `dev` versioning stays
 * aligned with main. Resolves package.json / CHANGELOG.md conflicts by keeping
 * `dev`'s package contents while adopting main's released version baseline, then
 * runs semantic-release on `dev` (cuts the next prerelease when there are new
 * releasable commits after the merge — e.g. 0.2.1-dev.1).
 *
 * Invoked from @semantic-release/exec successCmd on main releases only.
 */

import { execSync, spawnSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const SYNC_BRANCH = 'dev'
const MAIN_BRANCH = 'main'
const AUTO_RESOLVE = new Set(['package.json', 'CHANGELOG.md'])
const SYNC_MESSAGE =
  'chore: sync dev with main after release [skip actions]'

function run(cmd, options = {}) {
  return execSync(cmd, {
    encoding: 'utf8',
    stdio: options.silent ? 'pipe' : 'inherit',
    ...options,
  })
}

function runSilent(cmd) {
  return run(cmd, { silent: true }).trim()
}

function currentBranch() {
  return runSilent('git rev-parse --abbrev-ref HEAD')
}

function devContainsMain() {
  try {
    run('git merge-base --is-ancestor origin/main origin/dev', {
      stdio: 'pipe',
    })
    return true
  } catch {
    return false
  }
}

function conflictedFiles() {
  return runSilent('git diff --name-only --diff-filter=U')
    .split('\n')
    .map((file) => file.trim())
    .filter(Boolean)
}

function resolvePackageJson() {
  const devPkg = JSON.parse(runSilent('git show :2:package.json'))
  const mainPkg = JSON.parse(runSilent('git show :3:package.json'))
  devPkg.version = mainPkg.version
  writeFileSync('package.json', `${JSON.stringify(devPkg, null, 2)}\n`)
}

function resolveChangelog() {
  writeFileSync('CHANGELOG.md', `${runSilent('git show :3:CHANGELOG.md')}\n`)
}

function resolveKnownConflicts(files) {
  if (files.includes('package.json')) resolvePackageJson()
  if (files.includes('CHANGELOG.md')) resolveChangelog()
  run(
    `git add ${[...AUTO_RESOLVE].filter((file) => files.includes(file)).join(' ')}`,
  )
}

function checkoutDev() {
  run(`git checkout ${SYNC_BRANCH}`)
  run(`git pull --ff-only origin ${SYNC_BRANCH}`)
}

function mergeMainIntoDev() {
  try {
    run(`git merge origin/${MAIN_BRANCH} --no-edit -m "${SYNC_MESSAGE}"`)
    return true
  } catch {
    const files = conflictedFiles()
    const unresolved = files.filter((file) => !AUTO_RESOLVE.has(file))
    if (unresolved.length > 0) {
      console.error(
        `Cannot auto-resolve merge conflicts in: ${unresolved.join(', ')}`,
      )
      process.exit(1)
    }

    resolveKnownConflicts(files)
    run(`git commit -m "${SYNC_MESSAGE}"`)
    return true
  }
}

function cutDevRelease() {
  const result = spawnSync('npx', ['semantic-release'], {
    stdio: 'inherit',
    env: process.env,
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function main() {
  if (currentBranch() !== MAIN_BRANCH) {
    console.log(`Skipping ${SYNC_BRANCH} sync: not on ${MAIN_BRANCH}`)
    return
  }

  run(`git fetch origin ${MAIN_BRANCH} ${SYNC_BRANCH} --tags`)
  checkoutDev()

  if (!devContainsMain()) {
    console.log(`Merging origin/${MAIN_BRANCH} into ${SYNC_BRANCH}`)
    mergeMainIntoDev()
    run(`git push origin ${SYNC_BRANCH}`)
  } else {
    console.log(`${SYNC_BRANCH} already contains ${MAIN_BRANCH}`)
  }

  cutDevRelease()
}

main()
