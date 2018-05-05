/* eslint-disable react/display-name, react/prop-types */
import React from 'react'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Image from '../../components/Image'
import Anchor from '../../components/Anchor'

const markdownMap = {
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => <Heading level={2}>{children}</Heading>,
  h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  img: ({ src, alt }) => <Image src={src} description={alt} />,
  a: ({ href, children }) => <Anchor href={href}>{children}</Anchor>,
}

export default markdownMap
