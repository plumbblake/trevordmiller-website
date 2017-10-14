import React from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import { baseRoutes, baseRouteKeys } from '../../../../pages'
import { uiGroups, spacing, fontSizes } from '../../../../utils/theme'

export default ({ baseRouteKey }) =>
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

    {baseRouteKeys.map((innerBaseRouteKey, index) => {
      const baseRoute = baseRoutes[innerBaseRouteKey]

      return (
        <Link prefetch key={index} href={baseRoute.path}>
          <a
            style={{
              textDecoration: 'none',
              padding: spacing.medium,
              color:
                baseRouteKey === innerBaseRouteKey
                  ? uiGroups.userCurrentState
                  : uiGroups.gray3,
              fontSize: fontSizes.large,
            }}
          >
            {baseRoute.title}
          </a>
        </Link>
      )
    })}
  </nav>
