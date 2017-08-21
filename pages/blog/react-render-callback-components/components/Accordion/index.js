import React from 'react'
import Toggle from '../Toggle'

const Accordion = ({ teaser, details }) =>
  <Toggle>
    {(isOpen, handleToggle) =>
      <section>
        <a onClick={handleToggle}>
          {`${isOpen ? '-' : '+'} ${teaser}`}
        </a>
        {isOpen && details}
      </section>}
  </Toggle>

export default Accordion
