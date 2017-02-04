import React from 'react'
import {spacing, screenSizes} from '../../../utils/styleGuide'
import Info from '../../../Info'
import Subscribe from './components/Subscribe'
import Follow from './components/Follow'

export default () => (
  <footer style={{
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    paddingBottom: 200,
    maxWidth: screenSizes.large,
    margin: 'auto',
    marginTop: spacing.large,
  }}>
    <Info>
      <div>
        For occasional updates, subscribe to my newsletter or other accounts - no spam
      </div>
      <Subscribe />
      <div style={{
        marginTop: spacing.medium,
      }}>
        <Follow />
      </div>
    </Info>
  </footer>
)
