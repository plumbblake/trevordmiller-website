/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { uiGroups } from "utils/theme";

const Video = ({
  src,
  autoplay,
  loop,
  muted,
  controls = "true",
  thumbnail
}) => (
  <LazyLoad offset={200} placeholder={<span />} once>
    <div
      style={{
        background: uiGroups.gray2
      }}
    >
      <video
        src={src}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        poster={thumbnail}
        style={{
          width: "100%",
          display: "block"
        }}
      />
    </div>
  </LazyLoad>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  thumbnail: PropTypes.string
};

export default Video;
