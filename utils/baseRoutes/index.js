const baseRoutes = [
  {
    path: '/',
    title: '~',
    description: `An overview of what is on the website`,
  },

  {
    path: '/blog',
    title: 'blog',
    description: 'Posts about code',
    visual: 'newspaper',
  },

  {
    path: '/projects',
    title: 'projects',
    description: 'Info and links to some of my projects and code',
    visual: 'stack',
  },

  {
    path: '/about',
    title: 'about',
    description: 'A bit about me',
    visual: 'profile',
  },

  {
    path: '/follow',
    title: 'follow',
    description: 'Follow along with my email list, social media, and whatnot',
    visual: 'userPlus',
  },
]

export default baseRoutes
