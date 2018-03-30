import { uiGroups, syntaxGroups } from '../theme'

const tags = {
  inProgress: {
    label: 'In Progress',
    color: uiGroups.userCurrentState,
    icon: 'timer',
    order: 0,
  },

  terminal: {
    label: 'Terminal',
    color: syntaxGroups.type,
    icon: 'terminal',
    order: 1,
  },

  git: {
    label: 'Git',
    color: syntaxGroups.type,
    icon: 'git',
    order: 2,
  },

  vim: {
    label: 'Vim',
    color: syntaxGroups.type,
    icon: 'vim',
    order: 3,
  },

  postgresql: {
    label: 'PostgreSQL',
    color: syntaxGroups.type,
    icon: 'postgresql',
    order: 4,
  },

  graphQl: {
    label: 'GraphQL',
    color: syntaxGroups.type,
    icon: 'graphql',
    order: 5,
  },

  ruby: {
    label: 'Ruby',
    color: syntaxGroups.type,
    icon: 'ruby',
    order: 6,
  },

  node: {
    label: 'Node',
    color: syntaxGroups.type,
    icon: 'node',
    order: 7,
  },

  react: {
    label: 'React',
    color: syntaxGroups.type,
    icon: 'react',
    order: 8,
  },

  hardware: {
    label: 'Hardware',
    color: syntaxGroups.type,
    icon: 'plug',
    order: 9,
  },

  general: {
    label: 'General',
    color: syntaxGroups.type,
    icon: 'tag',
    order: 10,
  },
}

export default tags
