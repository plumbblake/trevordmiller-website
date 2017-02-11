import React, {PropTypes, Component} from 'react'
import Head from 'next/head'
import {
  uiGroups,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../utils/styleGuide'
import styleReset from './utils/styleReset'
import analytics from './utils/analytics'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'

export default class Screen extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showDescription: PropTypes.bool,
    sections: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
      component: React.PropTypes.element.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    window.ga('set', 'page', window.location.pathname)
    window.ga('send', 'pageview')
  }

  render() {
    const {title, description, showDescription, sections} = this.props
    return (
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
            name='author'
            content='Trevor D. Miller'
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
          <script dangerouslySetInnerHTML={{__html: analytics}} />
        </Head>

        <div style={{
          color: uiGroups.gray4,
          fontFamily: fontFamilies.primary,
          fontSize: fontSizes.medium,
          fontWeight: fontWeights.normal,
          lineHeight: lineHeights.medium,
          background: uiGroups.background,
          backgroundImage: 'url("/static/circuit-board-flipped.png"), url("/static/circuit-board.png")',
          backgroundSize: '1000px, 1000px',
          backgroundPosition: 'center top, center bottom',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}>
          <Navigation />
          <Main
            title={title}
            description={showDescription ? description : null}
            sections={sections}
          />
          <Footer />
        </div>

      </div>
    )
  }
}
