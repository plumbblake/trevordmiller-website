import { Component } from 'react'
import RSS from 'rss'
import { blogPosts } from '../'

const feed = new RSS({
  title: 'Trevor D. Miller blog',
  feed_url: 'https://trevordmiller.com/blog/feed',
  site_url: 'https://trevordmiller.com',
  description:
    'Blog posts about coding, focused on the terminal (Unix, Vim, Git, etc.)',
  categories: [
    'Unix',
    'Vim',
    'Git',
    'terminal',
    'command line',
    'Code',
    'Programming',
    'Software Engineering',
  ],
  language: 'en',
  copyright: '2017 Trevor D. Miller',
})

Object.keys(blogPosts).forEach(blogPostKey => {
  const blogPost = blogPosts[blogPostKey]
  feed.item({
    title: blogPost.title,
    description: blogPost.description,
    url: `https://trevordmiller.com/blog/${blogPostKey}`,
    categories: blogPost.tags.map(tag => tag.label),
    date: blogPost.date,
    author: 'Trevor D. Miller',
    enclosure: {
      file: `https://trevordmiller.com${blogPost.mainVisual}`,
    },
  })
})

const xml = feed.xml()

export default class extends Component {
  static async getInitialProps({ res }) {
    res.write(xml)
    res.end()
  }
}
