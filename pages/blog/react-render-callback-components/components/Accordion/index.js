import React from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'

const Accordion = ({ teaser, details }) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <section>
        <button onClick={handleToggleClick}>{`${
          isOpen ? '-' : '+'
        } ${teaser}`}</button>
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
