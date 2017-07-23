const baseRoutes = [
  {
    path: '/',
    title: 'Home',
    description: `An overview of what is on the website`,
  },

  {
    path: '/projects',
    title: 'Projects',
    description: 'Info and links to some of my projects and code',
    visual: 'stack',
  },

  {
    path: '/blog',
    title: 'Blog',
    description: 'Articles, mostly posts about code.',
    visual: 'newspaper',
  },

  {
    path: '/about',
    title: 'About',
    description: 'Aspects about me',
    visual: 'profile',
  },

  {
    path: '/follow',
    title: 'Follow',
    description: 'Follow along with my newsletter, social media, and whatnot',
    visual: 'userPlus',
  },
]

export default baseRoutes
