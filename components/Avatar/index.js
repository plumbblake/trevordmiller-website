import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const Avatar = ({ src, description }) => (
  <LazyLoad offset={200} placeholder={<span />} once>
    <img
      src={src}
      alt={description}
      style={{
        width: "100%",
        borderRadius: "50%"
      }}
    />
  </LazyLoad>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Avatar;
