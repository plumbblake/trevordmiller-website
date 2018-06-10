import React from 'react'
import { spacing } from 'utils/theme'
import Info from 'components/Info'
import JoinEmailList from './components/JoinEmailList'
import Accounts from './components/Accounts'

const Follow = () => (
  <section
    style={{
      textAlign: 'center',
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
