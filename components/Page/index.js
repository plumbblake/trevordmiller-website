import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { uiGroups } from "utils/theme";
import { baseRouteKeys } from "pages";
import Normalize from "components/Normalize";
import analytics from "./utils/analytics";
import ErrorBoundary from "./components/ErrorBoundary";
import CircuitBoard from "./components/CircuitBoard";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

class Page extends Component {
  componentDidMount() {
    window.ga("set", "page", window.location.pathname);
    window.ga("send", "pageview");
  }

  render() {
    const {
      baseRouteKey,
      mainVisual,
      showMainVisual,
      pathname,
      title,
      description,
      tags,
      info,
      cta,
      sections,
      children
    } = this.props;
    return (
      <ErrorBoundary>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content="Trevor D. Miller" />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={pathname} />
          <meta
            property="og:image"
            content={`https://trevordmiller.com${mainVisual}`}
          />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="Trevor D. Miller portfolio" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@trevordmiller" />
          <meta name="twitter:creator" content="@trevordmiller" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={`https://trevordmiller.com${mainVisual}`}
          />
          <meta name="twitter:image:alt" content="A decorative image" />

          <link
            rel="alternate"
            type="application/rss+xml"
            href="https://trevordmiller.com/blog/feed"
          />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color={uiGroups.userCurrentState}
          />
          <meta name="theme-color" content={uiGroups.userCurrentState} />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-16x16.png"
            sizes="16x16"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />

          <script dangerouslySetInnerHTML={{ __html: analytics }} />
        </Head>

        <Normalize>
          <CircuitBoard>
            <Navigation baseRouteKey={baseRouteKey} />

            <ErrorBoundary>
              <Main
                title={title}
                mainVisual={showMainVisual ? mainVisual : null}
                tags={tags}
                description={description}
                info={info}
                cta={cta}
                sections={sections}
              >
                {children}
              </Main>
            </ErrorBoundary>

            <Footer />
          </CircuitBoard>
        </Normalize>
      </ErrorBoundary>
    );
  }
}

Page.propTypes = {
  baseRouteKey: PropTypes.oneOf(baseRouteKeys),
  mainVisual: PropTypes.string.isRequired,
  showMainVisual: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  info: PropTypes.string,
  cta: PropTypes.element,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.element.isRequired
    })
  ),
  children: PropTypes.element,
  footer: PropTypes.bool
};

export default Page;
