import React from 'react'
import { syntaxGroups } from '../../utils/theme'

export default ({ children }) =>
  <span
    style={{
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </span>
