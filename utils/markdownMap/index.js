import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image";
import Anchor from "../../components/Anchor";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import PreformattedText from "../../components/PreformattedText";
import InlineCode from "../../components/InlineCode";
import Quote from "../../components/Quote";

const Heading1MarkdownMap = ({ children }) => (
  <Heading level={1}>{children}</Heading>
);
Heading1MarkdownMap.propTypes = {
  children: PropTypes.string.isRequired
};

const Heading2MarkdownMap = ({ children }) => (
  <Heading level={2}>{children}</Heading>
);
Heading2MarkdownMap.propTypes = {
  children: PropTypes.string.isRequired
};

const Heading3MarkdownMap = ({ children }) => (
  <Heading level={3}>{children}</Heading>
);
Heading3MarkdownMap.propTypes = {
  children: PropTypes.string.isRequired
};

const Heading4MarkdownMap = ({ children }) => (
  <Heading level={4}>{children}</Heading>
);
Heading4MarkdownMap.propTypes = {
  children: PropTypes.string.isRequired
};

const ParagraphMarkdownMap = ({ children }) => (
  <Paragraph>{children}</Paragraph>
);
ParagraphMarkdownMap.propTypes = {
  children: PropTypes.node.isRequired
};

const ImageMarkdownMap = ({ src, alt }) => (
  <Image src={src} description={alt} />
);
ImageMarkdownMap.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const AnchorMarkdownMap = ({ href, children }) => (
  <Anchor href={href}>{children}</Anchor>
);
AnchorMarkdownMap.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

const UnorderedListMarkdownMap = ({ children }) => <List>{children}</List>;
UnorderedListMarkdownMap.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

const OrderedListMarkdownMap = ({ children }) => (
  <List kind="number">{children}</List>
);
OrderedListMarkdownMap.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

const ListItemMarkdownMap = ({ children }) => <ListItem>{children}</ListItem>;
ListItemMarkdownMap.propTypes = {
  children: PropTypes.node.isRequired
};

const PreformattedTextMarkdownMap = ({ children }) => (
  <PreformattedText>{children}</PreformattedText>
);
PreformattedTextMarkdownMap.propTypes = {
  children: PropTypes.node.isRequired
};

const InlineCodeMarkdownMap = ({ children }) => (
  <InlineCode>{children}</InlineCode>
);
InlineCodeMarkdownMap.propTypes = {
  children: PropTypes.string.isRequired
};

const BlockQuoteMarkdownMap = ({ children }) => <Quote>{children}</Quote>;
BlockQuoteMarkdownMap.propTypes = {
  children: PropTypes.node.isRequired
};

const markdownMap = {
  h1: Heading1MarkdownMap,
  h2: Heading2MarkdownMap,
  h3: Heading3MarkdownMap,
  h4: Heading4MarkdownMap,
  p: ParagraphMarkdownMap,
  img: ImageMarkdownMap,
  a: AnchorMarkdownMap,
  ul: UnorderedListMarkdownMap,
  ol: OrderedListMarkdownMap,
  li: ListItemMarkdownMap,
  pre: PreformattedTextMarkdownMap,
  inlineCode: InlineCodeMarkdownMap,
  blockquote: BlockQuoteMarkdownMap
};

export default markdownMap;
