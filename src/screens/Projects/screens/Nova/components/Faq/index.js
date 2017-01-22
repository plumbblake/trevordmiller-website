import React from 'react'
import {spacing} from '../../../../../../utils/styleGuide'
import Heading from '../../../../../../components/Heading'

const faq = [
  {
    question: `Where is editor/plugin {x}?`,
    answer: `If you don't see it in the list, it doesn't exist yet! The Nova admins only maintain the Vim, Atom, Hyper, and iTerm plugins, but the community has built or is building others.`,
  },
  {
    question: `Is there an {x} version?`,
    answer: `Nope. The Nova admins only support one version. Feel free to fork, override, or use another theme if you don't like it.`,
  },
  {
    question: `Can you change {x}?`,
    answer: `If it is a bug or syntax not following the Nova color meanings, yes! Please submit an issue on the related GitHub repo. If it is personal preference, sorry we can't accomodate everyone. Feel free to fork, override, or use another theme.`,
  },
  {
    question: `Can I contribute?`,
    answer: `Yes! We would love to have your help. Just follow the "CONTRIBUTING.md" in the related repo.`,
  },
]

const Faq = () => (
  <div>
    {faq.map((item, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < faq.length)
            ? spacing.medium
            : 0,
        }}
      >
        <Heading level={4}>
          {item.question}
        </Heading>
        <div>
          {item.answer}
        </div>
      </div>
    ))}
  </div>
)

export default Faq
