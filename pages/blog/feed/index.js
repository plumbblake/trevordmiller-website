import { Component } from "react";
import RSS from "rss";
import { baseRoutes } from "../../";
import { blogPosts } from "../";

const feed = new RSS({
  title: "Trevor D. Miller blog",
  feed_url: "https://trevordmiller.com/blog/feed",
  site_url: "https://trevordmiller.com",
  description: baseRoutes.blog.description,
  categories: [
    "unix",
    "vim",
    "git",
    "terminal",
    "command line",
    "testing",
    "code",
    "programming",
    "programmer",
    "software development",
    "softare developer",
    "software engineering"
  ],
  language: "en",
  copyright: "2018 Trevor D. Miller"
});

Object.keys(blogPosts).forEach(blogPostKey => {
  const blogPost = blogPosts[blogPostKey];
  feed.item({
    title: blogPost.title,
    description: blogPost.description,
    url: `https://trevordmiller.com/blog/${blogPostKey}`,
    categories: blogPost.tags.map(tag => tag.label),
    date: blogPost.date,
    author: "Trevor D. Miller",
    enclosure: {
      file: `https://trevordmiller.com${blogPost.mainVisual}`
    }
  });
});

const xml = feed.xml();

class Feed extends Component {
  static async getInitialProps({ res }) {
    res.write(xml);
    res.end();
  }
}

export default Feed;
