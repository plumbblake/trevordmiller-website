import React from 'react'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const posts = {
  'minimal-office': {
    title: `My minimal office set up`,
    description: `For years I had a cheap office: a $30 plastic folding desk and an external monitor I'd plug into and that was it. But recently, I took the plunge and set up my dream office and I'm ecstatic with how it turned out.`,
  },
  'rebuilding-my-website': {
    title: `Rebuilding my website to aggregate all my stuff`,
    description: `Since I started programming in high school, I've accumulated personal domains, websites, and apps spread across the internet. I decided I wanted to consolidate these into a single app with a shared set of components, so that it is easier to maintain. So now all my web projects live under https://trevordmiller.com; this includes my portfolio, open source project documentation, guitar lessons, blog etc.`,
  },
  'spaced-repetition-software': {
    title: `Retaining what I learn through Spaced Repetition Software (SRS)`,
    description: `When I learn something new, I add it to my SRS. Then, each morning I review what my SRS suggests I\'m about to forget, to ingrain it in my long-term memory.`,
  },
}

export default () => (
  <Screen
    title='Blog'
    description='Writings from Trevor D. Miller on programming, organization, music, and other thoughts.'
    sections={Object.keys(posts).map(key => ({
      title: posts[key].title,
      component: (
        <Teaser 
          description={posts[key].description}
          href={`/blog/${key}`}
        />
      ),
    }))}
  />
)
