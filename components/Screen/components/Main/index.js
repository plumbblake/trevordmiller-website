import React from 'react'
import { screenSizes } from '../../../../utils/theme'
import Header from './components/Header'
import Section from './components/Section'

export default ({ title, mainVisual, description, info, cta, sections }) => (
  <main>
    <div
      style={{
        maxWidth: screenSizes.large,
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <Header
        title={title}
        mainVisual={mainVisual}
        description={description}
        info={info}
        cta={cta}
      />
      {sections.map((section, index) => (
        <Section key={index} title={section.title}>
          {section.component}
        </Section>
      ))}
    </div>
  </main>
)
