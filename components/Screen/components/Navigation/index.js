import React from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import baseRoutes from '../../../../utils/baseRoutes'
import { uiGroups, spacing, fontSizes } from '../../../../utils/styleGuide'

export const baseRouteTitles = baseRoutes.map(baseRoute => baseRoute.title)

export default ({ baseRouteTitle }) =>
  <nav
    style={{
      background: uiGroups.backgroundShade,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
  >
    <Link prefetch href="/">
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: spacing.medium,
        }}
      >
        <Icon type="trevordmiller" size={fontSizes.xlarge} />
      </a>
    </Link>

    {baseRoutes.map((baseRoute, index) =>
      <Link prefetch key={index} href={baseRoute.path}>
        <a
          style={{
            textDecoration: 'none',
            padding: spacing.medium,
            color:
              baseRouteTitle === baseRoute.title
                ? uiGroups.userCurrentState
                : uiGroups.gray3,
            fontSize: fontSizes.large,
          }}
        >
          {baseRoute.title}
        </a>
      </Link>
    )}
  </nav>
