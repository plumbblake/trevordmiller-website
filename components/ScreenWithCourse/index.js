import React from 'react'
import Screen from '../Screen'
import Heading from '../Heading'
import Anchor from '../Anchor'
import Button from '../Button'
import Avatar from '../Avatar'
import Icon from '../Icon'
import { courses } from '../../pages/courses'
import {
  spacing,
  fontSizes,
  fontWeights,
  uiGroups,
  syntaxGroups,
} from '../../utils/theme'

const ScreenWithCourse = ({ id }) => {
  const course = courses[id]

  const enrollButton = (
    <Anchor href={course.enrollHref}>
      <Button>{`Enroll in course${course.cost === 0
        ? ' for free!'
        : ''}`}</Button>
    </Anchor>
  )

  const videoCount = course.curriculum.reduce(
    (memo, section) => memo + section.items.length,
    0
  )

  const faq = [
    {
      question: `When does the course start and finish?`,
      answer: `The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish.`,
    },
    {
      question: `How long do I have access to the course?`,
      answer: `How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own.`,
    },
    ...(course.cost === 0
      ? {}
      : {
          question: `What if I am unhappy with the course?`,
          answer: `If you are unsatisfied with your purchase, you can get a full refund for 30 days.`,
        }),
  ]
  return (
    <Screen
      baseRouteKey="courses"
      mainVisual={course.mainVisual}
      showMainVisual
      pathname={`https://trevordmiller.com/courses/${id}`}
      title={course.title}
      description={course.description}
      info={course.info}
      cta={enrollButton}
      sections={[
        {
          title: 'Curriculum',
          component: (
            <div>
              <div
                style={{
                  marginBottom: spacing.medium,
                  color: syntaxGroups.special,
                }}
              >
                {`${course.time} long. ${videoCount} videos. Sample code included.`}
              </div>
              {course.curriculum.map((section, index) =>
                <div
                  key={index}
                  style={{
                    marginBottom:
                      index + 1 < course.curriculum.length ? spacing.large : 0,
                  }}
                >
                  <Heading level={4}>
                    {section.title}
                  </Heading>
                  <div>
                    {section.items.map((item, index) =>
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Icon
                          type="film"
                          fill={uiGroups.backgroundShade}
                          size={fontSizes.medium}
                        />
                        <div
                          key={index}
                          style={{
                            fontSize: fontSizes.small,
                            fontWeight: fontWeights.bold,
                            color: uiGroups.backgroundShade,
                            marginLeft: spacing.small,
                          }}
                        >
                          {item.title}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ),
        },
        {
          title: 'Your Instructor',
          component: (
            <div>
              <div
                style={{
                  width: 100,
                  marginBottom: spacing.small,
                }}
              >
                <Avatar />
              </div>

              <Heading level={4}>Trevor D. Miller</Heading>
              <div>
                I work as a Software Engineer. I love learning and solving
                problems. Being a programmer isn't just a job for me, it's a
                hobby too. I especially enjoy working in the terminal and
                contributing to open source. I strive to learn new things every
                day and share what I learn.
              </div>
            </div>
          ),
        },
        {
          title: 'Frequently Asked Questions',
          component: (
            <div>
              {faq.map((item, index) =>
                <div
                  key={index}
                  style={{
                    marginBottom: index + 1 < faq.length ? spacing.large : 0,
                  }}
                >
                  <Heading level={4}>
                    {item.question}
                  </Heading>
                  <div>
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ),
        },
        {
          title: 'Get started now!',
          component: enrollButton,
        },
      ]}
    />
  )
}

export default ScreenWithCourse
