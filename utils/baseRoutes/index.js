const baseRoutes = [
  {
    path: '/',
    title: 'home',
    description: `An overview of what is on the website`,
  },

  {
    path: '/projects',
    title: 'projects',
    description: 'Info and links to some of my projects and code',
    visual: 'stack',
  },

  {
    path: '/blog',
    title: 'blog',
    description: 'Posts about code.',
    visual: 'newspaper',
  },

  {
    path: '/about',
    title: 'about',
    description: 'Aspects about me',
    visual: 'profile',
  },

  {
    path: '/follow',
    title: 'follow',
    description: 'Follow along with my email lists, social media, and whatnot',
    visual: 'userPlus',
  },
]

export default baseRoutes
