import React from 'react'
import { uiGroups, fontSizes } from '../../utils/theme'

const Label = ({ children }) => (
  <p
    style={{
      fontSize: fontSizes.small,
      color: uiGroups.gray3,
    }}
  >
    {children}
  </p>
)

export default Label
