import { uiGroups, syntaxGroups } from '../theme'

const tags = {
  inProgress: {
    label: 'in-progress',
    color: uiGroups.userCurrentState,
    icon: 'timer',
    order: 0,
  },

  terminal: {
    label: 'terminal',
    color: syntaxGroups.type,
    icon: 'terminal',
    order: 1,
  },

  git: {
    label: 'git',
    color: syntaxGroups.type,
    icon: 'git',
    order: 2,
  },

  vim: {
    label: 'vim',
    color: syntaxGroups.type,
    icon: 'vim',
    order: 3,
  },

  postgresql: {
    label: 'postgresql',
    color: syntaxGroups.type,
    icon: 'postgresql',
    order: 4,
  },

  graphQl: {
    label: 'graphql',
    color: syntaxGroups.type,
    icon: 'graphql',
    order: 5,
  },

  ruby: {
    label: 'ruby',
    color: syntaxGroups.type,
    icon: 'ruby',
    order: 6,
  },

  node: {
    label: 'node',
    color: syntaxGroups.type,
    icon: 'node',
    order: 7,
  },

  react: {
    label: 'react',
    color: syntaxGroups.type,
    icon: 'react',
    order: 8,
  },

  hardware: {
    label: 'hardware',
    color: syntaxGroups.type,
    icon: 'plug',
    order: 9,
  },

  general: {
    label: 'general',
    color: syntaxGroups.type,
    icon: 'tag',
    order: 10,
  },
}

export default tags
