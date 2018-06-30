import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { borderRadii } from "utils/theme";

const maxWidthsBySize = {
  medium: 400
};

const Image = ({ src, description, style, size }) => (
  <LazyLoad offset={200} placeholder={<span />} once>
    <img
      style={{
        borderRadius: borderRadii.medium,
        width: "100%",
        maxWidth: maxWidthsBySize[size] ? maxWidthsBySize[size] : "100%",
        ...style
      }}
      src={src}
      alt={description}
    />
  </LazyLoad>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
  size: PropTypes.oneOf(Object.keys(maxWidthsBySize))
};

export default Image;
