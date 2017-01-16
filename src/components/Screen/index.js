import React, {PropTypes} from 'react'
import Head from 'next/head'
import {
  screenSizes,
  spacing,
  uiGroups,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../../utils/styleGuide'
import Heading from '../Heading'
import styleReset from './utils/styleReset'
import Header from './components/Header'
import Section from './components/Section'

export const Screen = ({
  title,
  description,
  sections,
}) => (
  <div>

    <Head>
      <title>
        {title}
      </title>
      <meta
        name='description'
        content={description}
      />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Quicksand:300,400'
        rel='stylesheet'
      />
      <style>
        {styleReset}
      </style>
    </Head>

    <div style={{
      background: uiGroups.background,
      color: uiGroups.gray4,
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.medium,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.medium,
      minHeight: '100vh',
    }}>

      <Header />

      <main style={{
        maxWidth: screenSizes.large,
        margin: 'auto',
      }}>

        <div style={{
          paddingTop: spacing.medium,
          paddingRight: spacing.large,
          paddingLeft: spacing.large,
          paddingBottom: spacing.medium,
        }}>
          <Heading level={1}>
            {title}
          </Heading>
          <Heading level={2}>
            {description}
          </Heading>
        </div>

        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
          >
            {section.component}
          </Section>
        ))}

      </main>

    </div>

  </div>
)

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  sections: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    component: React.PropTypes.element.isRequired,
  })).isRequired,
}

export default Screen
