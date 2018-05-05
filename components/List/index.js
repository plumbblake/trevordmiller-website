import React from 'react'
import PropTypes from 'prop-types'
import { spacing } from '../../utils/theme'

const listStyle = {
  marginTop: spacing.medium,
  marginBottom: spacing.medium,
  paddingLeft: spacing.xlarge,
}

const List = ({ children, kind = 'bullet' }) => {
  if (kind === 'bullet') {
    return <ul style={listStyle}>{children}</ul>
  }

  if (kind === 'number') {
    return <ol style={listStyle}>{children}</ol>
  }
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List
