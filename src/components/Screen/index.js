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
import Footer from './components/Footer'

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
      <link rel='manifest' href='/static/manifest.json' />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
      <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color={uiGroups.userCurrentState} />
      <meta name='theme-color' content={uiGroups.userCurrentState} />
      <meta name='msapplication-config' content='/static/browserconfig.xml' />
      <link rel='icon' type='image/png' href='/static/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/static/favicon-16x16.png' sizes='16x16' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
    </Head>

    <div style={{
      background: uiGroups.background,
      backgroundImage: 'url("/static/circuit-board-flipped.png"), url("/static/circuit-board.png")',
      backgroundSize: '1200px, 1200px',
      backgroundPosition: 'center top, center bottom',
      backgroundRepeat: 'no-repeat, no-repeat',
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
      <Footer />
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
