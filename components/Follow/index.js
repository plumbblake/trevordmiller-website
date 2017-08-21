import React from 'react'
import { spacing } from '../../utils/styleGuide'
import Info from '../Info'
import Subscribe from '../Subscribe'
import FollowIcons from './components/FollowIcons'

export default () =>
  <section>
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
