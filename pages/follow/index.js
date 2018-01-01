import React from 'react'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Follow from '../../components/Follow'

export default () => (
  <ScreenWithBaseRoute
    id="follow"
    sections={[
      {
        component: <Follow />,
      },
    ]}
    footer={false}
  />
)
