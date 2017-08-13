import React from 'react'
import { uiGroups, fontSizes } from '../../utils/styleGuide'

export default ({ children }) =>
  <p
    style={{
      fontSize: fontSizes.small,
      color: uiGroups.gray3,
    }}
  >
    {children}
  </p>
