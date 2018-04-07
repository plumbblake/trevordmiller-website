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

  redux: {
    label: 'Redux',
    color: syntaxGroups.type,
    icon: 'redux',
    order: 9,
  },

  css: {
    label: 'CSS',
    color: syntaxGroups.type,
    icon: 'css',
    order: 10,
  },

  hardware: {
    label: 'Hardware',
    color: syntaxGroups.type,
    icon: 'plug',
    order: 11,
  },

  general: {
    label: 'General',
    color: syntaxGroups.type,
    icon: 'tag',
    order: 12,
  },
}

export default tags
