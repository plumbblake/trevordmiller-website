import React from 'react'
import PropTypes from 'prop-types'
import { spacing, screenSizes } from '../../../../../../utils/theme'
import Heading from '../../../../../Heading'
import Image from '../../../../../Image'
import Info from '../../../../../Info'
import Tags from '../../../../../Tags'

const Header = ({ title, mainVisual, description, tags, info, cta }) => (
  <header
    style={{
      maxWidth: screenSizes.large,
      margin: 'auto',
      paddingTop: spacing.xlarge,
      paddingBottom: spacing.xlarge,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
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
        <Image src={mainVisual} description="Decorative overview image" quiet />
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
