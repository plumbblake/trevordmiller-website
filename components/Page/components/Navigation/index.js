/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../../../Icon'
import { baseRoutes, baseRouteKeys } from '../../../../pages'
import {
  uiGroups,
  spacing,
  fontSizes,
  fontWeights,
} from '../../../../utils/theme'

const Navigation = ({ baseRouteKey }) => (
  <header>
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
                  color:
                    baseRouteKey === innerBaseRouteKey
                      ? uiGroups.userCurrentState
                      : uiGroups.gray4,
                  fontSize: fontSizes.large,
                  fontWeight: fontWeights.light,
                }}
              >
                {baseRoute.title}
              </span>
            </a>
          </Link>
        )
      })}
    </nav>
  </header>
)

Navigation.propTypes = {
  baseRouteKey: PropTypes.oneOf(baseRouteKeys),
}

export default Navigation
