import React from 'react'
import {spacing} from '../../utils/styleGuide'
import Info from '../Info'
import Subscribe from './components/Subscribe'
import FollowIcons from './components/FollowIcons'

export default () => (
  <section>
    <Info>
      <div>
        Subscribe to my newsletter if you want to get emailed when I publish new blog posts and projects. No spam.
      </div>
      <Subscribe />
      <div style={{
        marginTop: spacing.large,
      }}>
        Follow elsewhere if you want to see my updates. Mostly posts about code.
      </div>
      <div>
        <FollowIcons />
      </div>
    </Info>
  </section>
)
