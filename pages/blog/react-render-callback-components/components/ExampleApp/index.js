import React from 'react'
import Accordion from '../Accordion'
import Modal from '../Modal'
import Thumbnail from '../Thumbnail'

const ExampleApp = () =>
  <main>
    <Accordion
      teaser="Tap to toggle Accordion details"
      details={<div>Some details</div>}
    />

    <Modal
      teaser={<button>Tap to toggle Modal details</button>}
      details={<div>Some details</div>}
    />

    <Thumbnail
      teaser="Tap image to toggle Thumbnail zoom"
      src="https://unsplash.it/1000"
    />
  </main>

export default ExampleApp
