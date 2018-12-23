import React from "react";
import PropTypes from "prop-types";
import { spacing, uiGroups, screenSizes } from "../../utils/theme";
import Anchor from "../Anchor";
import Button from "../Button";
import Image from "../Image";
import Icon from "../Icon";
import Tags from "../Tags";

const Teaser = ({ visual, body, links, tags }) => (
  <div>
    {tags ? (
      <div
        style={{
          marginBottom: spacing.medium - spacing.xsmall
        }}
      >
        <Tags tags={tags} />
      </div>
    ) : null}

    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {visual ? (
        <div
          style={{
            marginBottom: spacing.xsmall,
            marginRight: spacing.large,
            maxWidth: 200
          }}
        >
          {visual && visual.startsWith("/") ? (
            <Image src={visual} description="Decorative image" />
          ) : (
            <Icon type={visual} fill={uiGroups.gray2} size={70} />
          )}
        </div>
      ) : null}

      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: screenSizes.small
        }}
      >
        <div>{body}</div>
        {links ? (
          <div
            style={{
              marginTop: spacing.small
            }}
          >
            {links.map((link, index) => (
              <div
                key={link.href}
                style={{
                  marginBottom: index + 1 < links.length ? spacing.small : 0
                }}
              >
                <Anchor href={link.href}>
                  <Button size="small">{link.description}</Button>
                </Anchor>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

Teaser.propTypes = {
  body: PropTypes.node.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  visual: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Teaser;
