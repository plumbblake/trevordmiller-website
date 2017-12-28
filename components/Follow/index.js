import React from 'react'
import { spacing, screenSizes } from '../../utils/theme'
import Info from '../Info'
import Subscribe from '../Subscribe'
import FollowIcons from './components/FollowIcons'

export default () =>
  <section
    style={{
      maxWidth: screenSizes.large - screenSizes.large / 2.5,
      margin: 'auto',
    }}
  >
    <Info>
      <div
        style={{
          marginTop: spacing.small,
        }}
      >
        <Subscribe />
      </div>

      <div
        style={{
          marginTop: spacing.large,
        }}
      >
        <FollowIcons />
      </div>
    </Info>
  </section>
