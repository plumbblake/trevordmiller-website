import React from 'react'
import {spacing} from '../../../../utils/styleGuide'
import Heading from '../../../../components/Heading'
import Avatar from './components/Avatar'

export default () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <div style={{
      width: 200,
      marginBottom: spacing.small,
    }}>
      <Avatar />
    </div>
    <Heading level={2}>
      Well, hello there! My name is Trevor.
    </Heading>
  </div>
)
