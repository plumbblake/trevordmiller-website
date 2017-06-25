import React from 'react'
import {spacing} from '../../utils/styleGuide'
import Info from '../Info'
import Subscribe from './components/Subscribe'
import FollowIcons from './components/FollowIcons'

export default () => (
  <section>
    <Info>
      <div>
        Subscribe to my newsletter to be notified when I publish new things. No spam.
      </div>
      <Subscribe />
      <div style={{
        marginTop: spacing.medium,
      }}>
        <FollowIcons />
      </div>
    </Info>
  </section>
)
