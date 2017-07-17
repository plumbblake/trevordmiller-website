import React from 'react'
import Screen from '../../../components/Screen'
import Paragraph from '../../../components/Paragraph'
import Code from '../../../components/Code'
import CodeBlock from '../../../components/CodeBlock'
import Heading from '../../../components/Heading'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import {posts} from '../'
import { 
  exampleDefine, 
  exampleUse,
  exampleApp,
  exampleToggle,
  exampleAccordian,
  exampleModal,
  exampleThumbnail,
} from './utils/exampleCodeStrings'
import ExampleApp from './components/ExampleApp'

const key = 'react-render-callback-components'

export default () => (
  <Screen
    baseRouteTitle='Blog'
    mainVisual={posts[key].mainVisual}
    pathname={`https://trevordmiller.com/blog/${key}`}
    title={posts[key].title}
    description={posts[key].description}
    showDescription
    sections={[

      {
        title: `What is a Render Callback?`,
        component: (
          <div>
            <Paragraph>
              Since React is mostly just JavaScript, it makes it really easy to share logic across components using functions. A "Render Callback" is a component that supplies arguments to a <Code>children</Code> prop that is a function (AKA Function as Child component). This might sound confusing but a code example should show how simple it really is.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Render Callback syntax`,
        component: (
          <div>
            <Heading level={4}>
              Define
            </Heading>
            <CodeBlock>
              {exampleDefine}
            </CodeBlock>
            <Paragraph>
              To define a Render Callback you return the children prop (a function) with arguments to share like <Code>this.props.children(thing1, thing2)</Code>.
            </Paragraph>

            <Heading level={4}>
              Use
            </Heading>
            <CodeBlock>
              {exampleUse}
            </CodeBlock>
            <Paragraph>
              To use a Render Callback you use a function as the children and do something with the arguments like <Code>{`<SharedThing>{(thing1, thing2) => // use args}</SharedThing>`}</Code>.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Practical Example`,
        component: (
          <div>
            <Paragraph>
              We have three components: an accordian, modal, and thumbnail image. Tap to interact with each one and compare how they are similiar.
            </Paragraph>

            <CodeBlock 
              fileName='App.js'
              output={<ExampleApp />}
            >
              {exampleApp}
            </CodeBlock>

            <Paragraph>
              What is common between them is they all can be "toggled" open/closed. We could write each of them as a stateful class component, but since they have the same state setup - let's share it! Let's abstract the state into a "Toggle" Render Callback component.
            </Paragraph>

            <CodeBlock fileName='Toggle.js'>
              {exampleToggle}
            </CodeBlock>
            
            <Paragraph>
              Now we don't have to re-write that state in each of our similiar components but can reuse the state passed to the children function and the instances of "Toggle" can just be stateless function components.
            </Paragraph>

            <CodeBlock fileName='Accordian.js'>
              {exampleAccordian}
            </CodeBlock>

            <CodeBlock fileName='Modal.js'>
              {exampleModal}
            </CodeBlock>

            <CodeBlock fileName='Thumbnail.js'>
              {exampleThumbnail}
            </CodeBlock>
          </div>
        ),
      },

      {
        title: `Example repo`,
        component: (
          <div>
            <Paragraph>
              These examples are available in a working app in a GitHub repo if you want to fork or clone it to try it out.
            </Paragraph>
            <Anchor href='https://github.com/trevordmiller/example-render-callback'>
              <Button>
                View example repo
              </Button>
            </Anchor>
          </div>
        ),
      },

      {
        title: 'Conclusion',
        component: (
          <div>
            <Paragraph>
              Although there are a few ways to share stateful logic across components in React, I feel that Render Callbacks are the most flexible and simple. All you need to remember is to pass a function as the children and then use the arguments!
            </Paragraph>
          </div>
        ),
      },

    ]}
  />
)
