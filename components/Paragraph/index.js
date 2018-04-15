import React from 'react'
import { spacing } from '../../utils/theme'

const Paragraph = ({ children }) => (
  <p
    style={{
      marginTop: spacing.medium,
      marginBottom: spacing.medium,
    }}
  >
    {children}
  </p>
)

export default Paragraph
