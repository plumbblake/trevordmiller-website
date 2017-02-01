import React from 'react'
import {screenSizes} from '../../../utils/styleGuide'
import Header from './components/Header'
import Section from './components/Section'

export default ({title, description, sections}) => (
  <main>
    <div style={{
      maxWidth: screenSizes.large,
      margin: 'auto',
      minHeight: '50vh',
    }}>
      <Header
        title={title}
        description={description}
      />
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
        >
          {section.component}
        </Section>
      ))}
    </div>
  </main>
)
