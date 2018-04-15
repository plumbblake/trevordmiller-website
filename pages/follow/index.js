import React from 'react'
import PageWithBaseRoute from '../../components/PageWithBaseRoute'
import Follow from '../../components/Follow'

const FollowWrapper = () => (
  <PageWithBaseRoute
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
