import React from 'react'
import { syntaxGroups, fontFamilies } from '../../utils/theme'

const Code = ({ children }) => (
  <span
    style={{
      fontFamily: fontFamilies.monoSpace,
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </span>
)

export default Code
