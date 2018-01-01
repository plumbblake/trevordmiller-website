import React from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import { baseRoutes, baseRouteKeys } from '../../../../pages'
import {
  uiGroups,
  spacing,
  fontFamilies,
  fontSizes,
} from '../../../../utils/theme'

export default ({ baseRouteKey }) => (
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
          paddingTop: spacing.medium,
          paddingBottom: spacing.medium,
          paddingLeft: spacing.large,
          paddingRight: spacing.large,
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
              paddingTop: spacing.medium,
              paddingBottom: spacing.medium,
              paddingLeft: spacing.large,
              paddingRight: spacing.large,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon
              type={baseRoute.visual}
              size={fontSizes.large}
              fill={
                baseRouteKey === innerBaseRouteKey
                  ? uiGroups.userCurrentState
                  : uiGroups.gray4
              }
            />
            <span
              style={{
                marginLeft: spacing.xsmall,
                fontFamily: fontFamilies.monospace,
                color:
                  baseRouteKey === innerBaseRouteKey
                    ? uiGroups.userCurrentState
                    : uiGroups.gray4,
                fontSize: fontSizes.large,
              }}
            >
              {baseRoute.title}
            </span>
          </a>
        </Link>
      )
    })}
  </nav>
)
