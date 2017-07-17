import React from 'react'
import Toggle from '../Toggle'

const Accordion = ({teaser, details}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <section>
        <a onClick={handleToggleClick}>
          {`${isOpen ? '-' : '+'} ${teaser}`}
        </a>
        {isOpen && details}
      </section>
    )}
  </Toggle>
)

export default Accordion
