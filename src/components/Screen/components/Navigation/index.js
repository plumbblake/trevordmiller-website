import React from 'react'
import Link from 'next/link'
import {uiGroups, spacing} from '../../../../utils/styleGuide'

const routes = [
  {
    path: '/',
    title: 'About',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
  {
    path: '/nova',
    title: 'Nova',
  },
]

export default () => (
  <nav style={{
    background: uiGroups.backgroundShade,
    display: 'flex',
  }}>
    {routes.map((route, index) => {
      // TODO: waiting on https://github.com/zeit/next.js/issues/141
      // const isActive = location.pathname === route.path
      const isActive = false
      return (
        <Link 
          key={index}
          href={route.path}
        >
          <a style={{
            textDecoration: 'none',
            padding: spacing.medium,
            background: isActive ? uiGroups.background : uiGroups.backgroundShade,
            color: isActive ? uiGroups.userCurrentState : uiGroups.gray3,
          }}>
            {route.title}
          </a>
        </Link>
      )
    })}
  </nav>
)
