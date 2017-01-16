import React from 'react'
import Link from 'next/link'

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
  {
    path: '/nova',
    title: 'Nova',
  },
]

export default () => (
  <header>
    <nav>
      {routes.map((route, index) => (
        <Link 
          key={index}
          href={route.path}
        >
          <a>{route.title}</a>
        </Link>
      ))}
    </nav>
  </header>
)
