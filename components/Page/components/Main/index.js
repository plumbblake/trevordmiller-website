import React from "react";
import PropTypes from "prop-types";
import { spacing, screenSizes } from "utils/theme";
import Header from "./components/Header";
import Section from "./components/Section";

const Main = ({
  title,
  mainVisual,
  description,
  tags,
  info,
  cta,
  sections,
  children
}) => (
  <main
    style={{
      maxWidth: screenSizes.large,
      margin: "auto",
      paddingLeft: spacing.large,
      paddingRight: spacing.large
    }}
  >
    <Header
      title={title}
      mainVisual={mainVisual}
      description={description}
      tags={tags}
      info={info}
      cta={cta}
    />

    {children
      ? children
      : sections.map((section, index) => (
          <Section key={index} note={section.note} title={section.title}>
            {section.component}
          </Section>
        ))}
  </main>
);

Main.propTypes = {
  title: PropTypes.string.isRequired,
  mainVisual: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  info: PropTypes.node,
  cta: PropTypes.node,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired
    })
  ),
  children: PropTypes.element
};

export default Main;
