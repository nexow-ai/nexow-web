const { execSync } = require('node:child_process')

function releaseBranch() {
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME
  const ref = process.env.GITHUB_REF || ''
  if (ref.startsWith('refs/heads/')) return ref.slice('refs/heads/'.length)
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return ''
  }
}

const onMain = releaseBranch() === 'main'

module.exports = {
  branches: [
    'main',
    {
      name: 'dev',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        // `dev` is always +0.0.1 (patch prerelease). Promoting through
        // `stg` onto `main` is always +0.1.0 (minor). Pre-1.0: do not cut
        // majors; reserve 1.0.0 for the deliberate stable launch.
        releaseRules: onMain
          ? [
              { breaking: true, release: 'minor' },
              { type: '*', release: 'minor' },
            ]
          : [
              { breaking: true, release: 'patch' },
              { type: '*', release: 'patch' },
            ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project are documented here. This file is generated from the commit history by semantic-release — do not edit it by hand.',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip actions]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/exec',
      {
        successCmd: 'node scripts/sync-dev-with-main.mjs',
      },
    ],
  ],
}
