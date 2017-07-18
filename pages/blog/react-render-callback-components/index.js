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
  exampleAccordion,
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
        title: 'What about Higher Order Components?',
        component: (
          <div>
            <Paragraph>
              A common way to share stateful logic across React components is using the "Higher Order Components" (HOC) pattern. This post will show an alternative that I feel is simpler and more flexible called "Render Callback components" (AKA Function as Child components).
            </Paragraph>
          </div>
        ),
      },

      {
        title: `What is a Render Callback?`,
        component: (
          <div>
            <Paragraph>
              A "Render Callback" is a component where the <Code>children</Code> prop is a function; then shared logic is accessed through the function's arguments. Render Callbacks are just functions - just JavaScript!
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
            <Paragraph>
              To define a Render Callback you return <Code>this.props.children</Code> (a function) with the arguments you want to share.
            </Paragraph>
            <CodeBlock file='SharedThing.js'>
              {exampleDefine}
            </CodeBlock>

            <Heading level={4}>
              Use
            </Heading>
            <Paragraph>
              To use a Render Callback you write an inline function with the arguments you've shared.
            </Paragraph>
            <CodeBlock file='AnotherComponent.js'>
              {exampleUse}
            </CodeBlock>
          </div>
        ),
      },

      {
        title: `Practical Example`,
        component: (
          <div>
            <Paragraph>
              We have three components: an <Code>Accordion</Code>, <Code>Modal</Code>, and <Code>Thumbnail</Code>. Here is an example <Code>App</Code> using all three and showing their output; tap the output to interact with each component and compare how they are similiar.
            </Paragraph>

            <CodeBlock 
              fileName='App.js'
              output={<ExampleApp />}
            >
              {exampleApp}
            </CodeBlock>

            <Paragraph>
              What is common between them? They all can be "toggled" open/closed. We could write each of them as a stateful class component with the same wrapping code, but since they have the same state setup - let's share it! Let's abstract the state into a <Code>Toggle</Code> component (a Render Callback).
            </Paragraph>

            <CodeBlock fileName='Toggle.js'>
              {exampleToggle}
            </CodeBlock>
            
            <Paragraph>
              Now components that use <Code>Toggle</Code> will have access to their own <Code>isOpen</Code> and <Code>handleToggleClick</Code> arguments without having to wire up the state code. The instances of <Code>Toggle</Code> (<Code>Accordion</Code>, <Code>Modal</Code>, and <Code>Thumbnail</Code>) can just be stateless function components.
            </Paragraph>

            <CodeBlock fileName='Accordion.js'>
              {exampleAccordion}
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
              Although there are a few ways to share stateful logic across components in React, I feel that the Render Callback pattern is the most flexible and simple. All you need to remember is to pass a function as the <Code>children</Code> and then use the arguments!
            </Paragraph>
          </div>
        ),
      },

    ]}
  />
)
