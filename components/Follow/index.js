import React from 'react'
import { spacing } from '../../utils/styleGuide'
import Info from '../Info'
import Subscribe from './components/Subscribe'
import FollowIcons from './components/FollowIcons'

export default () =>
  <section>
    <Info>
      <div>
        Submit your email if you'd like occasional updates. No spam. Your email
        will not be shared with anyone else.
      </div>
      <Subscribe />
      <div
        style={{
          marginTop: spacing.large,
        }}
      >
        Follow elsewhere if you'd like :)
      </div>
      <div>
        <FollowIcons />
      </div>
    </Info>
  </section>
