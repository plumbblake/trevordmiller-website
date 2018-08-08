import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { uiGroups, spacing, fontSizes, fontWeights } from "utils/theme";
import Icon from "components/Icon";
import { baseRoutes, baseRouteKeys } from "pages";

const Navigation = ({ baseRouteKey }) => (
  <header>
    <nav
      style={{
        background: uiGroups.backgroundShade,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <Link href="/" prefetch>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: spacing.medium,
            paddingBottom: spacing.medium,
            paddingLeft: spacing.large,
            paddingRight: spacing.large
          }}
        >
          <Icon type="trevordmiller" size={fontSizes.xlarge} />
        </a>
      </Link>

      {baseRouteKeys.map((innerBaseRouteKey, index) => {
        const baseRoute = baseRoutes[innerBaseRouteKey];

        return (
          <Link href={baseRoute.path} prefetch key={index}>
            <a
              href={baseRoute.path}
              style={{
                textDecoration: "none",
                paddingTop: spacing.medium,
                paddingBottom: spacing.medium,
                paddingLeft: spacing.large,
                paddingRight: spacing.large,
                display: "flex",
                alignItems: "center"
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
                  fontWeight: fontWeights.light
                }}
              >
                {baseRoute.title}
              </span>
            </a>
          </Link>
        );
      })}
    </nav>
  </header>
);

Navigation.propTypes = {
  baseRouteKey: PropTypes.string
};

export default Navigation;
