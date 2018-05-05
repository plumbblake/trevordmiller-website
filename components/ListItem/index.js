import React from 'react'
import PropTypes from 'prop-types'
import { spacing } from '../../utils/theme'

const ListItem = ({ children }) => {
  return (
    <li
      style={{
        marginTop: spacing.xsmall,
        marginBottom: spacing.xsmall,
      }}
    >
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
}

export default ListItem
