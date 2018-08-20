### What about Higher Order Components?

A common way to share stateful logic across React components is using the Higher Order Components (HOC) pattern. This post will show an alternative that I feel is simpler and more flexible called Render Callback components (AKA Function as Child components).

### What is a Render Callback?

A Render Callback is a component where the children prop is a function; then shared logic is accessed through the function's arguments. Render Callbacks are just functions - just JavaScript!

### Render Callback syntax

#### Define

To define a Render Callback you return this.props.children (a function) with the arguments you want to share.

```jsx
import { Component } from 'react'

class SharedThing extends Component {

  ...

  render() {
    return this.props.children(thing1, thing2)
  }
}

export default SharedThing
```

#### Use

To use a Render Callback you write an inline function with the arguments you've shared.

```jsx
import React from 'react'

const AnotherComponent = () => (
  <SharedThing>
    {(thing1, thing2) => (
      // use thing1 and thing2
    )}
  </SharedThing>
)

export default AnotherComponent
```

### Practical Example

We have three components: an Accordion, Modal, and Thumbnail. Here is an example App using all three.

#### App.js

```jsx
import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Thumbnail from "./Thumbnail";

const App = () => (
  <main>
    <Accordion
      teaser="Tap to toggle Accordion details"
      details={<div>Some details</div>}
    />

    <Modal
      teaser="Tap to toggle Modal details"
      details={<div>Some details</div>}
    />

    <Thumbnail
      teaser="Tap image to toggle Thumbnail zoom"
      src="https://unsplash.it/1000"
    />
  </main>
);

export default App;
```

What is common between them? They all can be toggled open/closed. We could write each of them as a stateful class component with the same wrapping code, but since they have the same state setup - let's share it! Let's abstract the state into a `Toggle` component (a Render Callback).

#### Toggle.js

```jsx
import { Component } from "react";

class Toggle extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return this.props.children(this.state.isOpen, this.handleToggle);
  }
}

export default Toggle;
```

Now components that use `Toggle` will have access to their own `isOpen` and `handleToggle` arguments without having to wire up the state code. The instances of `Toggle` (Accordion, Modal, and Thumbnail) can just be stateless function components.

#### Accordion.js

```jsx
import React from "react";
import Toggle from "./Toggle";

const Accordion = ({ teaser, details }) => (
  <Toggle>
    {(isOpen, handleToggle) => (
      <section>
        <button onClick={handleToggle}>
          {`${isOpen ? "-" : "+"} ${teaser}`}
        </button>
        {isOpen && details}
      </section>
    )}
  </Toggle>
);

export default Accordion;
```

#### Modal.js

```jsx
import React from 'react'
import Toggle from './Toggle'

const Modal = ({teaser, details}) => (
  <Toggle>
    {(isOpen, handleToggle) => (
      <button onClick={handleToggle}>
        {teaser}
        {isOpen && (
          <div>
            <div style={{
              color: '#fff',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
            }}>
              {details}
            </div>
            <div style={{
              background: 'rgba(0, 0, 0, 0.9)',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }} />
          </div>
        )}
      <button>
    )}
  </Toggle>
)

export default Modal
```

#### Thumbnail.js

```jsx
import React from "react";
import Toggle from "./Toggle";

const Thumbnail = ({ src, teaser }) => (
  <Toggle>
    {(isOpen, handleToggle) => (
      <div>
        <div>{teaser}</div>
        <button onClick={handleToggle}>
          <img
            src={src}
            alt={teaser}
            style={{
              maxWidth: isOpen ? "100%" : 150
            }}
          />
        </button>
      </div>
    )}
  </Toggle>
);

export default Thumbnail;
```

#### Example repo

These examples are available in a working app in a GitHub repo if you want to fork or clone it to try it out.

[View example repo](https://github.com/trevordmiller/example-render-callback)

### Conclusion

Although there are a few ways to share stateful logic across components in React, I feel that the Render Callback pattern is the most flexible and simple. All you need to remember is to pass a function as the children and then use the arguments!
