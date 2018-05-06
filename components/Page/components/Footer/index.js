import React from 'react'
import { spacing, screenSizes } from 'utils/theme'
import Follow from 'components/Follow'

const Footer = () => (
  <footer
    style={{
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
      paddingBottom: 200,
      maxWidth: screenSizes.large,
      margin: 'auto',
      marginTop: spacing.xlarge,
    }}
  >
    <Follow />
  </footer>
)

export default Footer
