import React from 'react'
import {screenSizes} from '../../../utils/styleGuide'
import Section from './components/Section'

export default ({sections}) => (
  <main style={{
    maxWidth: screenSizes.large,
    margin: 'auto',
  }}>

    {sections.map((section, index) => (
      <Section
        key={index}
        title={section.title}
      >
        {section.component}
      </Section>
    ))}

  </main>
)
