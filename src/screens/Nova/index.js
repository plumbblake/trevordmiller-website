import React from 'react'
import Screen from '../../components/Screen'
import Contributors from './components/Contributors'
import Colors from './components/Colors'
import ExampleCode from './components/ExampleCode'
import Characteristics from './components/Characteristics'
import Plugins from './components/Plugins'
import Faq from './components/Faq'

export default () => (
  <Screen
    title='Nova'
    description='A color scheme for modern web development'
    sections={[
      {
        component: <Contributors />,
      },
      {
        component: <Colors />,
      },
      {
        component: <ExampleCode />,
      },
      {
        title: 'Characteristics',
        component: <Characteristics />,
      },
      {
        title: 'Plugins',
        component: <Plugins />,
      },
      {
        title: 'Frequently Asked Questions',
        component: <Faq />,
      },
    ]}
  />
)
