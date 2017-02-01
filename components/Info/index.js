import React from 'react'
import {uiGroups, spacing, borderRadii, borderSizes, screenSizes} from '..//utils/styleGuide'

export default ({children}) => (
  <div style={{
    padding: spacing.large,
    margin: 'auto',
    marginBottom: spacing.large,
    borderRadius: borderRadii.large,
    border: `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`,
    textAlign: 'center',
    maxWidth: screenSizes.medium,
  }}>
    {children}
  </div>
)
