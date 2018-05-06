/* eslint-disable react/display-name, react/prop-types */
import React from 'react'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Image from 'components/Image'
import Anchor from 'components/Anchor'
import List from 'components/List'
import ListItem from 'components/ListItem'
import PreformattedText from 'components/PreformattedText'
import InlineCode from 'components/InlineCode'

const markdownMap = {
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => <Heading level={2}>{children}</Heading>,
  h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  img: ({ src, alt }) => <Image src={src} description={alt} />,
  a: ({ href, children }) => <Anchor href={href}>{children}</Anchor>,
  ul: ({ children }) => <List>{children}</List>,
  ol: ({ children }) => <List kind="number">{children}</List>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  pre: ({ children }) => <PreformattedText>{children}</PreformattedText>,
  inlineCode: ({ children }) => <InlineCode>{children}</InlineCode>,
}

export default markdownMap
