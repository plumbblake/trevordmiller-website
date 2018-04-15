import React from 'react'
import ScreenWithBlogPost from '../../../components/ScreenWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'

const SpacedRepetitionSoftware = () => (
  <ScreenWithBlogPost
    id="spaced-repetition-software"
    sections={[
      {
        title: `Recording learning`,
        component: (
          <div>
            <Paragraph>
              I've made a habit of making a note whenever I learn something.
              These are things I learn while studying, working, talking with
              people, etc. This includes code syntax, faces with names,
              scriptures, and anything else I want to remember. I use a spaced
              repetition software for these notes called Anki. Spaced repetition
              software (aka SRS) is used to cement short term memory into long
              term memory, just before you would normally forget something. So,
              for example, I learned that on a Mac, you can open up mission
              control with a keyboard shortcut (control + up arrow), so I made
              this “card” in Anki:
            </Paragraph>
            <Image
              src="/static/anki-card-creation.jpg"
              description={`Creating a card in Anki`}
            />
            <Paragraph>
              I use templates to fill in the repetitive stuff, so when I review
              the card it looks like this:
            </Paragraph>
            <Image
              src="/static/anki-card-question.jpg"
              description={`Viewing a card question in Anki`}
            />
          </div>
        ),
      },
      {
        title: `Reviewing in calculated intervals`,
        component: (
          <div>
            <Paragraph>
              Each day I go through the cards that bubble up from the spaced
              repetition algorithm (max of 20 a day, which takes about 5-10
              minutes a day); I view the question, think of the answer, then
              show the answer and see if I was right. I can then answer how
              difficult it was for me to remember so the software knows when to
              show this to me the next time.
            </Paragraph>
            <Image
              src="/static/anki-card-answer.jpg"
              description={`Viewing a card answer in Anki`}
            />
            <Paragraph>
              Every new card starts with short review increments (10 minutes, a
              day or two etc) then gets longer the better I remember it. Some of
              my cards are up to four years between reviews now so it is very
              efficient; the algorithms are optimized to only have you review
              something when you are about to forget it, which cements it in
              long term memory.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Oranizing by category`,
        component: (
          <div>
            <Paragraph>
              I have all of these cards organized into "decks" by category:
            </Paragraph>
            <Image
              src="/static/anki-decks.jpg"
              description={`Viewing Anki decks of cards`}
            />
          </div>
        ),
      },
      {
        title: `Study statistics`,
        component: (
          <div>
            <Paragraph>
              With software like Anki, you get nice stats over time:
            </Paragraph>
            <Image
              src="/static/anki-stats.jpg"
              description={`Viewing Anki statistics`}
            />
          </div>
        ),
      },
      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              No matter what your career or types of things you learn, I think
              using SRS can benefit your brain. SRS ingrains knowledge in
              calculated, ever-increasing intervals, just before I am about to
              forget something. I've found it to be a fantastic way to retain
              knowledge. I've been doing this for a few years and my skills,
              knowledge, and memory have dramatically improved. I recommend
              giving it a try!
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)

export default SpacedRepetitionSoftware
