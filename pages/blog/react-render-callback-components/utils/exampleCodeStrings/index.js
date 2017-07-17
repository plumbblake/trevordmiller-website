export const exampleDefine = `import {Component} from 'react'

class SharedThing extends Component {

  this.state = {
    someState: someValue,
  }

  render() {
    return this.props.children(this.state.someState)
  }
}

export default SharedThing
`

export const exampleUse = `import React from 'react'

const AnotherComponent = () => (
  <SharedThing>
    {(someState) => (
      // use someState
    )}
  </SharedThing>
)

export default AnotherComponent
`

export const exampleApp = `import React from 'react'
import Accordian from './Accordian'
import Modal from './Modal'
import Thumbnail from './Thumbnail'

const exampleImageUrl = 'https://unsplash.it/1000'

const ExampleDetails = () => (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
  </div>
)

const App = () => (
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

export default App
`

export const exampleToggle = `import {Component} from 'react'

class Toggle extends Component {

  state = {
    isOpen: false,
  }

  handleToggleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return this.props.children(
      this.state.isOpen, 
      this.handleToggleClick
    )
  }
}

export default Toggle
`

export const exampleAccordian = `import React from 'react'
import Toggle from './Toggle'

const Accordian = ({teaser, details}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <section>
        <a onClick={handleToggleClick}>
          {\`\${isOpen ? '-' : '+'} \${teaser}\`}
        </a>
        {isOpen && details}
      </section>
    )}
  </Toggle>
)

export default Accordian
`

export const exampleModal = `import React from 'react'
import Toggle from './Toggle'

const Modal = ({teaser, details}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <div onClick={handleToggleClick}>
        {teaser}
        {isOpen
          ? <div>
              <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                color: '#fff',
              }}>
                {details}
              </div>
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                background: 'rgba(0, 0, 0, 0.8)',
              }} />
            </div>
          : null
        }
      </div>
    )}
  </Toggle>
)

export default Modal
`

export const exampleThumbnail = `import React from 'react'
import Toggle from './Toggle'

const Thumbnail = ({src, teaser}) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <div>
        <img
          src={src}
          alt={teaser}
          onClick={handleToggleClick}
          style={{
            maxWidth: isOpen ? '100%' : 150
          }}
        />
        <div>
          {teaser}
        </div>
      </div>
    )}
  </Toggle>
)

export default Thumbnail
`
