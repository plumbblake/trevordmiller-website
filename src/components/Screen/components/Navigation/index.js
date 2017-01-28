import React from 'react'
import Link from 'next/link'
import {uiGroups, spacing, fontSizes} from '../../../../utils/styleGuide'

const routes = [
  {
    path: '/',
    title: 'About',
  },
  {
    path: '/projects',
    title: 'Projects',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
]

export default () => (
  <nav style={{
    background: uiGroups.backgroundShade,
    display: 'flex',
    justifyContent: 'center',
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
            fontSize: fontSizes.large,
          }}>
            {route.title}
          </a>
        </Link>
      )
    })}
  </nav>
)
