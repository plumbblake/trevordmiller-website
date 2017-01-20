import React, {PropTypes} from 'react'
import Head from 'next/head'
import {
  uiGroups,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../../utils/styleGuide'
import styleReset from './utils/styleReset'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Main from './components/Main'

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
      <Navigation />
      <Header
        title={title}
        description={description}
      />
      <Main sections={sections} />
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
