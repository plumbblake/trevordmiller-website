import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { colorValues } from "utils/theme";

const InnerAnchor = styled.a`
  color: ${colorValues.colors.blue};
  line-height: 0;
`;

const Anchor = ({ href, children }) =>
  href.startsWith("/") ? (
    <Link href={href} prefetch>
      <InnerAnchor href={href}>{children}</InnerAnchor>
    </Link>
  ) : (
    <InnerAnchor href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </InnerAnchor>
  );

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Anchor;
