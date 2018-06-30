/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const Audio = ({ src }) => (
  <LazyLoad offset={200} placeholder={<span />} once>
    <audio
      src={src}
      controls
      style={{
        width: "100%"
      }}
    />
  </LazyLoad>
);

Audio.propTypes = {
  src: PropTypes.string.isRequired
};

export default Audio;
