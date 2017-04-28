import React from 'react'
import {spacing, borderRadii, screenSizes} from '../../utils/styleGuide'

export default ({children}) => (
  <div style={{
    padding: spacing.large,
    marginBottom: spacing.large,
    borderRadius: borderRadii.medium,
    background: 'rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    maxWidth: screenSizes.large - (screenSizes.large / 2.5),
    margin: 'auto',
  }}>
    {children}
  </div>
)
