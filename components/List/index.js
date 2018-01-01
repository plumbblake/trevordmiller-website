import React from 'react'
import PropTypes from 'prop-types'
import { colorValues, spacing, fontSizes } from '../../utils/theme'
import Icon from '../Icon'

const List = ({ items, type = 'bullet' }) => {
  const symbolColor =
    type === 'link' ? colorValues.colors.blue : colorValues.colors.green

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: index + 1 < items.length ? spacing.xsmall : 0,
          }}
        >
          <span
            style={{
              color: symbolColor,
              marginRight: spacing.xsmall,
            }}
          >
            {type === 'number' ? (
              `${index + 1})`
            ) : (
              <Icon
                type={type}
                fill={symbolColor}
                size={type === 'bullet' ? fontSizes.small : fontSizes.medium}
              />
            )}
          </span>
          {item}
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  ordered: PropTypes.string,
}

export default List
