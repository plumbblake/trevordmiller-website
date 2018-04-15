import React from 'react'
import PropTypes from 'prop-types'
import { screenSizes } from '../../../../utils/theme'
import Header from './components/Header'
import Section from './components/Section'

const Main = ({
  title,
  mainVisual,
  description,
  tags,
  info,
  cta,
  sections,
}) => (
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
        tags={tags}
        info={info}
        cta={cta}
      />
      {sections.map((section, index) => (
        <Section key={index} note={section.note} title={section.title}>
          {section.component}
        </Section>
      ))}
    </div>
  </main>
)

Main.propTypes = {
  title: PropTypes.string.isRequired,
  mainVisual: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  info: PropTypes.node,
  cta: PropTypes.node,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired,
    }),
  ),
}

export default Main
