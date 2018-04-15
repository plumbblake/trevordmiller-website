import React from 'react'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Follow from '../../components/Follow'

const FollowWrapper = () => (
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

export default FollowWrapper
