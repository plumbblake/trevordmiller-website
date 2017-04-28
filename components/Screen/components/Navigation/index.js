import React from 'react'
import Link from 'next/link'
import {uiGroups, spacing, fontSizes} from '../../../../utils/styleGuide'

const baseRoutes = [
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

export const baseRouteTitles = baseRoutes.map(baseRoute => baseRoute.title)

export default ({baseRouteTitle}) => (
  <nav style={{
    background: uiGroups.backgroundShade,
    display: 'flex',
    justifyContent: 'center',
  }}>
    {baseRoutes.map((baseRoute, index) => (
      <Link 
        prefetch
        key={index}
        href={baseRoute.path}
      >
        <a style={{
          textDecoration: 'none',
          padding: spacing.medium,
          color: baseRouteTitle === baseRoute.title
            ? uiGroups.userCurrentState
            : uiGroups.gray3,
          fontSize: fontSizes.large,
        }}>
          {baseRoute.title}
        </a>
      </Link>
    ))}
  </nav>
)
