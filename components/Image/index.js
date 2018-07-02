import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { borderRadii } from "utils/theme";

const Image = ({ src, description }) => (
  <LazyLoad offset={200} placeholder={<span />} once>
    <img
      style={{
        borderRadius: borderRadii.medium,
        width: "100%",
        maxWidth: "100%"
      }}
      src={src}
      alt={description}
    />
  </LazyLoad>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Image;
