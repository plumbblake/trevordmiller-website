import React from 'react'
import { syntaxGroups } from '../../utils/styleGuide'

export default ({ children }) =>
  <span
    style={{
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </span>
