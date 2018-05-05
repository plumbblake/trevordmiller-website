import React from 'react'
import PropTypes from 'prop-types'
import { spacing, fontSizes, borderRadii, borderSizes } from '../../utils/theme'
import Icon from '../Icon'

const Tags = ({ tags }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    {tags.map(tag => (
      <div
        key={tag.label}
        style={{
          border: `${borderSizes.xsmall}px solid ${tag.color}`,
          borderRadius: borderRadii.medium,
          color: tag.color,
          fontSize: fontSizes.small,
          paddingTop: spacing.xxsmall,
          paddingBottom: spacing.xxsmall,
          paddingRight: spacing.xsmall,
          paddingLeft: spacing.xsmall,
          marginRight: spacing.xsmall,
          marginBottom: spacing.xsmall,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Icon type={tag.icon} fill={tag.color} size={fontSizes.medium} />

          <div
            style={{
              marginLeft: spacing.xsmall,
            }}
          >
            {tag.label}
          </div>
        </div>
      </div>
    ))}
  </div>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string,
    }),
  ).isRequired,
}

export default Tags
