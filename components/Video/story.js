import React from "react";
import { storiesOf } from "@storybook/react";
import Video from ".";

const src = "https://trevordmiller.com/static/hideaway-example.mp4";
const thumbnail = "https://static/real-world-git-course-preview-thumbnail.png";

storiesOf("Video", module)
  .addDecorator(story => <div style={{ maxWidth: 500 }}>{story()}</div>)
  .add("Default", () => <Video src={src} />)
  .add("Autoplay", () => <Video src={src} autoplay />)
  .add("Loop", () => <Video src={src} loop />)
  .add("Muted", () => <Video src={src} muted />)
  .add("Controls", () => <Video src={src} controls={false} />)
  .add("Thumbnail", () => <Video src={src} thumbnail={thumbnail} />);
