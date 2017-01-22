import React from 'react'
import Screen from '../../components/Screen'
import Intro from './components/Intro'
import Aspects from './components/Aspects'

export default () => (
  <Screen
    title='About'
    sections={[
      {
        component: <Intro />,
      },
      {
        component: <Aspects />,
      },
    ]}
  / >
)
