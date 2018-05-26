import React from 'react'
import PropTypes from 'prop-types'
import { spacing, screenSizes } from 'utils/theme'
import Heading from 'components/Heading'
import Image from 'components/Image'
import Info from 'components/Info'
import Tags from 'components/Tags'

const Header = ({ title, mainVisual, description, tags, info, cta }) => (
  <header
    style={{
      maxWidth: screenSizes.large,
      margin: 'auto',
      marginTop: spacing.xlarge,
    }}
  >
    <Heading level={1}>{title}</Heading>

    <div
      style={{
        marginTop: spacing.small,
      }}
    >
      <Heading level={2}>{description}</Heading>
    </div>

    {tags ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Tags tags={tags} />
      </div>
    ) : null}

    {mainVisual && (
      <div
        style={{
          maxWidth: 350,
          margin: 'auto',
          marginTop: spacing.small,
        }}
      >
        <Image src={mainVisual} description="Decorative overview image" />
      </div>
    )}

    {cta && (
      <div
        style={{
          marginTop: spacing.small,
          textAlign: 'center',
        }}
      >
        {cta}
      </div>
    )}

    {info && (
      <div
        style={{
          marginTop: spacing.small,
          marginBottom: spacing.large,
        }}
      >
        <Info>{info}</Info>
      </div>
    )}
  </header>
)

Header.propTypes = {
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
}

export default Header
