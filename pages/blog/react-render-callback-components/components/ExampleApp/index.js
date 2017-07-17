import React from 'react'
import Accordian from '../Accordian'
import Modal from '../Modal'
import Thumbnail from '../Thumbnail'

const exampleImageUrl = 'https://unsplash.it/1000'

const ExampleDetails = () => (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
  </div>
)

const ExampleApp = () => (
  <main>
    <Accordian
      teaser='Tap to toggle Accordian details'
      details={<ExampleDetails />}
    />
    
    <Modal
      teaser={<button>Tap to toggle Modal details</button>}
      details={<ExampleDetails />}
    />

    <Thumbnail
      teaser='Tap image to toggle Thumbnail zoom'
      src={exampleImageUrl}
    />
  </main>
)

export default ExampleApp
