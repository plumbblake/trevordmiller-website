import React from 'react'
import { spacing, screenSizes } from '../../utils/theme'
import Info from '../Info'
import JoinEmailList from './components/JoinEmailList'
import Accounts from './components/Accounts'

const Follow = () => (
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
        <JoinEmailList />
      </div>

      <div
        style={{
          marginTop: spacing.large,
        }}
      >
        <Accounts />
      </div>
    </Info>
  </section>
)

export default Follow
