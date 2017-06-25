import React from 'react'
import {spacing, screenSizes} from '../../../../utils/styleGuide'
import Follow from '../../../Follow'

export default () => (
  <footer style={{
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    paddingBottom: 200,
    maxWidth: screenSizes.large,
    margin: 'auto',
    marginTop: spacing.large,
  }}>
    <Follow />
  </footer>
)
