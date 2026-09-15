// Enforces Conventional Commits (feat / fix / chore / docs / refactor / style /
// test / build / ci / perf / revert) on the commit message via the husky
// commit-msg hook. This keeps the git history clean so semantic-release can
// derive versions and the changelog from it.
export default {
  extends: ['@commitlint/config-conventional'],
}
