import React from "react";
import tags from "utils/tags";
import PageWithBaseRoute from "components/PageWithBaseRoute";
import Teaser from "components/Teaser";

export const blogPosts = {
  "learning-routine": {
    tags: [tags.general],
    mainVisual: "/static/books.jpg",
    title: `Staying up-to-date as a software developer with a daily learning routine`,
    description: `How I study and practice to keep my skills current in the fast-moving field of software development.`,
    date: "June 9, 2018"
  },

  "test-behavior": {
    tags: [tags.general, tags.react],
    mainVisual: "/static/test-tubes.jpg",
    title: `How to avoid tying tests to implementation`,
    description: `Examples of how you can test what your code should do instead of how it does it.`,
    date: "April 10, 2018"
  },

  "end-to-end-tests": {
    tags: [tags.node],
    mainVisual: "/static/end-to-end-tests.png",
    title: `Writing end-to-end tests that are simple and fast`,
    description: `How you can write simple, lightweight end-to-end tests that aren't slow and brittle.`,
    date: "October 16, 2017"
  },

  "graphql-schema": {
    tags: [tags.graphQl],
    mainVisual: "/static/graphql-schema.jpg",
    title: `Using a GraphQL schema to supercharge team collaboration`,
    description: `Examples of using a GraphQL schema to automate data pieces across back-end and front-end.`,
    date: "December 13, 2017"
  },

  dotfiles: {
    tags: [tags.terminal, tags.vim, tags.git],
    mainVisual: "/static/dotfiles.png",
    title: `Organizing tooling settings using dotfiles`,
    description: `Examples of using dotfiles to manage and back-up the config for git, shells, editors, etc.`,
    date: "July 23, 2017"
  },

  "raspberry-pi-button": {
    tags: [tags.terminal, tags.node, tags.hardware],
    mainVisual: "/static/dog-bathroom-button.jpg",
    title: `Running a server on a Raspberry Pi with a physical button`,
    description: `How to set up a Raspberry Pi to send a text message when a button is pressed.`,
    date: "June 1, 2017"
  },

  "react-render-callback-components": {
    tags: [tags.react],
    mainVisual: "/static/react-render-callback-components.png",
    title: `Sharing stateful UI logic in React apps using Render Callback components`,
    description: `Examples of abstracting shared logic across multiple React components using the Render Callback pattern (AKA Render Props or Function as Child components).`,
    date: "July 15, 2017"
  },

  "brittle-css": {
    tags: [tags.css],
    mainVisual: "/static/brittle-css.jpg",
    title: `How to find and fix brittle CSS`,
    description: `Examples of making CSS easier to maintain with Flexbox, fluid values, additive media queries etc.`,
    date: "March 12, 2018"
  },

  "color-scheme-building": {
    tags: [tags.terminal, tags.vim, tags.git, tags.node],
    mainVisual: "/static/nova-example-code-screenshot.png",
    title: `Building the Nova color scheme`,
    description: `Using an npm module to generate color schemes for multiple editors and tools from one source.`,
    date: "May 1, 2017"
  },

  "task-list": {
    tags: [tags.general],
    mainVisual: "/static/todoist.jpg",
    title: `Using a task list as a single source of truth`,
    description: `How I use my task list to aggregate everything I want and need to do.`,
    date: "April 1, 2017"
  },

  "spaced-repetition-software": {
    tags: [tags.general],
    mainVisual: "/static/anki-card-question.jpg",
    title: `Retaining what I learn through Spaced Repetition Software`,
    description: `How I record and review what I learn to engrain it in long-term memory.`,
    date: "February 1, 2017"
  },

  "minimal-office": {
    tags: [tags.general],
    mainVisual: "/static/minimal-office-first-person.jpg",
    title: `My minimal office set up`,
    description: `How I set up my office for focus and productivity.`,
    date: "March 1, 2017"
  },

  "windows-on-mac": {
    tags: [tags.general],
    mainVisual: "/static/macbook.jpg",
    title: `Running Windows on Mac`,
    description: `How to set up Windows on a Mac legally, for free, with native performance using Boot Camp.`,
    date: "April 6, 2018"
  },

  "wholesome-media": {
    tags: [tags.general],
    mainVisual: "/static/common-sense-media.png",
    title: `Configuring devices for wholesome media`,
    description: `How I use a combination of filters and settings to keep media in my home clean.`,
    date: "January 1, 2017"
  },

  "rebuilding-my-website": {
    tags: [tags.general],
    mainVisual: "/static/trevordmiller-website.png",
    title: `Rebuilding my website to aggregate all my stuff`,
    description: `How I consolidate all of my code projects under one website.`,
    date: "December 1, 2016"
  }
};

export const blogPostKeys = Object.keys(blogPosts);

const Blog = () => (
  <PageWithBaseRoute
    id="blog"
    sections={blogPostKeys.map(blogPostKey => {
      const blogPost = blogPosts[blogPostKey];
      return {
        title: blogPost.title,
        component: (
          <Teaser
            tags={blogPost.tags}
            visual={blogPost.mainVisual}
            body={blogPost.description}
            links={[
              {
                description: "Read the blog post",
                href: `/blog/${blogPostKey}`
              }
            ]}
          />
        )
      };
    })}
  />
);

export default Blog;
