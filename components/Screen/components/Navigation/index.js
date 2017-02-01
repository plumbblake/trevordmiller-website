import React from 'react'
import Link from 'next/link'
import {uiGroups, spacing, fontSizes} from '../../../utils/styleGuide'

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
    {routes.map((route, index) => (
      <Link 
        key={index}
        href={route.path}
      >
        <a style={{
          textDecoration: 'none',
          padding: spacing.medium,
          color: uiGroups.gray3,
          fontSize: fontSizes.large,
        }}>
          {route.title}
        </a>
      </Link>
    ))}
  </nav>
)
