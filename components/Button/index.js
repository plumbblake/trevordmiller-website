import React from 'react'
import {
  uiGroups,
  spacing,
  borderRadii,
  fontSizes,
  fontFamilies,
} from '../../utils/styleGuide'

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

export default ({ onClick, type = 'primary', children, big }) =>
  <button
    onClick={onClick}
    style={{
      paddingTop: spacing.medium,
      paddingBottom: spacing.medium,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
      minWidth: 175,
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      border: 'none',
      fontSize: big ? fontSizes.xlarge : fontSizes.medium,
      fontFamily: fontFamilies.primary,
      outline: 'none',
      borderRadius: borderRadii.medium,
      ...stylesByType[type],
    }}
  >
    {children}
  </button>
