import React from 'react'
import {spacing} from '../../utils/styleGuide'

export default ({children}) => (
  <p style={{
    marginTop: spacing.medium,
    marginBottom: spacing.medium,
  }}>
    {children}
  </p>
)
