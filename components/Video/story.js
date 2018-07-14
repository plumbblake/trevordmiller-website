import React from "react";
import { storiesOf } from "@storybook/react";
import Video from ".";

const videoFile = "/static/hideaway-example.mp4";
const thumbnailImageFile =
  "/static/real-world-git-course-preview-thumbnail.png";

storiesOf("Video", module)
  .addDecorator(story => <div style={{ maxWidth: 500 }}>{story()}</div>)
  .add("Default", () => <Video src={videoFile} />)
  .add("Autoplay", () => <Video src={videoFile} autoplay />)
  .add("Loop", () => <Video src={videoFile} loop />)
  .add("Muted", () => <Video src={videoFile} muted />)
  .add("Controls", () => <Video src={videoFile} controls={false} />)
  .add("Thumbnail", () => (
    <Video src={videoFile} thumbnail={thumbnailImageFile} />
  ));
