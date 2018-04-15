import React from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'

const Accordion = ({ teaser, details }) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <section>
        <a onClick={handleToggleClick}>{`${isOpen ? '-' : '+'} ${teaser}`}</a>
        {isOpen && details}
      </section>
    )}
  </Toggle>
)

Accordion.propTypes = {
  teaser: PropTypes.string.isRequired,
  details: PropTypes.node.isRequired,
}

export default Accordion
