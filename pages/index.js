import React from "react";
import Page from "components/Page";
import Teaser from "components/Teaser";

export const baseRoutes = {
  courses: {
    path: "/courses",
    title: "Courses",
    description: `Some free tutorial videos I've recorded for software developers.`,
    visual: "film"
  },

  blog: {
    path: "/blog",
    title: "Blog",
    description: `Some articles I've written for software developers.`,
    visual: "newspaper"
  },

  projects: {
    path: "/projects",
    title: "Projects",
    description: "My open source code.",
    visual: "folder"
  },

  resume: {
    path: "/resume",
    title: "Resume",
    description: "My work experience.",
    visual: "profile"
  },

  about: {
    path: "/about",
    title: "About",
    description: "A bit about me.",
    visual: "user"
  },

  follow: {
    path: "/follow",
    title: "Follow",
    description: "My email list and accounts across the web.",
    visual: "internet"
  }
};

export const baseRouteKeys = Object.keys(baseRoutes);

const Home = () => (
  <Page
    mainVisual="/static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="Home"
    description="Links to my video courses, blog posts, code projects, and whatnot."
    sections={baseRouteKeys.map((baseRouteKey, index) => {
      const baseRoute = baseRoutes[baseRouteKey];

      return {
        title: baseRoute.title,
        component: (
          <Teaser
            key={index}
            visual={baseRoute.visual}
            body={baseRoute.description}
            links={[
              {
                description: `View ${baseRoute.title} page`,
                href: baseRoute.path
              }
            ]}
          />
        )
      };
    })}
  />
);

export default Home;
