import React from 'react'
import {uiGroups, spacing, borderRadii} from '../utils/styleGuide'

const stylesByType = {
  primary: {
    background: uiGroups.userCurrentState,
    color: uiGroups.background,
  },
  secondary: {
    background: uiGroups.gray2,
    color: uiGroups.background,
  },
}

export default ({onClick, type = 'primary', children}) => (
  <a 
    onClick={onClick}
    style={{
      paddingTop: spacing.medium,
      paddingBottom: spacing.medium,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
      display: 'inline-block',
      textAlign: 'center',
      borderRadius: borderRadii.medium,
      ...stylesByType[type]
    }}
  >
    {children}
  </a>
)
