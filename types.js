module.exports = {
  build: {
    description:
      'Changes that affect the build system or external dependencies (npm, webpack, typescript)',
    title: 'Builds'
  },
  chore: {
    description: "Other changes that don't modify src or test files",
    title: 'Chores'
  },
  ci: {
    description:
      'Changes to our CI configuration files and scripts (NOTE: Does not bump the version)',
    title: 'Continuous Integrations'
  },
  docs: {
    description: 'Documentation only changes',
    title: 'Documentation'
  },
  feat: {
    description: 'A new feature',
    title: 'Features'
  },
  fix: {
    description: 'A bug fix',
    title: 'Bug Fixes'
  },
  perf: {
    description: 'A code change that improves performance',
    title: 'Performance'
  },
  refactor: {
    description:
      'A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc)',
    title: 'Code Refactoring'
  },
  revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts'
  },
  style: {
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Style'
  },
  test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests'
  }
};
