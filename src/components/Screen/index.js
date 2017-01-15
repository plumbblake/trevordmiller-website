import React from 'react'
import Head from 'next/head'
import styleReset from './utils/styleReset'
import Header from './components/Header'

export default ({title, children}) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
      <style>
        {styleReset}
      </style>
    </Head>
    <header>
      <Header />
    </header>
    <main>
      {children}
    </main>
  </div>
)
