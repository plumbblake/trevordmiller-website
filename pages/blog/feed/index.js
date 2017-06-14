import {Component} from 'react'
import RSS from 'rss'
import {posts} from '../'

const feed = new RSS({
  title: 'Trevor D. Miller blog',
  feed_url: 'https://trevordmiller.com/blog/feed',
  site_url: 'https://trevordmiller.com',
  description: 'Blog posts from Trevor',
  image_url: 'https://trevordmiller.com/static/avatar.jpg',
  categories: ['Programming', 'Software Engineering', 'Productivity'],
  language: 'en',
  copyright: '2017 Trevor D. Miller',
})

Object.keys(posts).forEach((postKey) => {
  const post = posts[postKey]
  feed.item({
    title: post.title,
    description: post.description,
    url: `https://trevordmiller.com/blog/${postKey}`,
    categories: post.tags.map(tag => tag.label),
    date: post.date,
    author: 'Trevor D. Miller',
    enclosure: {
      url: `https://trevordmiller.com${post.mainVisual}`,
    },
  })
})

const xml = feed.xml()

export default class extends Component {
  static async getInitialProps ({res}) {
    res.write(xml)
    res.end() 
  }
}
