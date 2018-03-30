import React from 'react'
import { syntaxGroups, fontFamilies } from '../../utils/theme'

export default ({ children }) => (
  <span
    style={{
      fontFamily: fontFamilies.monoSpace,
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </span>
)
