import React from 'react'
import Screen from '../Screen'
import Heading from '../Heading'
import Anchor from '../Anchor'
import Button from '../Button'
import Avatar from '../Avatar'
import Icon from '../Icon'
import List from '../List'
import Video from '../Video'
import { baseRoutes } from '../../pages'
import { courses } from '../../pages/courses'
import { spacing, fontSizes, uiGroups, syntaxGroups } from '../../utils/theme'

const ScreenWithCourse = ({ id }) => {
  const course = courses[id]

  const enrollButton = (
    <Anchor href={course.enrollHref}>
      <Button>{`Enroll in course for ${
        course.cost === 0 ? 'free' : `$${course.cost}`
      }`}</Button>
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
      answer: `How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own. No need to continue paying one of those pesky subscription payments to keep access to courses you've bought.`,
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
          title: 'Course preview video',
          component: (
            <Video
              src={course.previewVideo}
              thumbnail={course.previewVideoThumbnail}
            />
          ),
        },

        {
          title: 'About trevordmiller.com courses',
          component: <div>{baseRoutes.courses.info}</div>,
        },

        {
          title: 'About this course',
          component: <div>{course.about}</div>,
        },

        {
          title: `What you get for ${
            course.cost === 0 ? 'free' : `$${course.cost}`
          }`,
          component: (
            <List
              items={[
                `${videoCount} videos`,
                `${course.time} to watch`,
                `Example code to download and practice with`,
                `Quizzes after each section to make sure you understand`,
                `Comments on each video to get help from your instructor and discuss with fellow students`,
                `All videos can be downloaded so you aren't locked in to where you can view them`,
              ]}
            />
          ),
        },

        {
          title: 'Course curriculum',
          component: (
            <div>
              {course.curriculum.map((section, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom:
                      index + 1 < course.curriculum.length ? spacing.large : 0,
                  }}
                >
                  <Heading level={4}>{section.title}</Heading>
                  <div>
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Icon
                          type="film"
                          fill={syntaxGroups.type}
                          size={fontSizes.medium}
                        />
                        <div
                          style={{
                            fontSize: fontSizes.small,
                            color: uiGroups.gray4,
                            marginLeft: spacing.small,
                          }}
                        >
                          {item.title}
                        </div>
                      </div>
                    ))}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Icon
                        type="newspaper"
                        fill={syntaxGroups.type}
                        size={fontSizes.medium}
                      />
                      <div
                        style={{
                          fontSize: fontSizes.small,
                          color: uiGroups.gray4,
                          marginLeft: spacing.small,
                        }}
                      >
                        Quiz
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },

        {
          title: 'Languages and tools used',
          component: (
            <div>
              trevordmiller.com courses show timeless principles applied. The
              examples show specific coding languages and tools. But these are
              only for example to apply the timeless principles. You don’t need
              to know the specific languages or tools shown. The principles
              apply to whatever coding language, editor, terminal emulator etc.
              that you work with.
            </div>
          ),
        },

        {
          title: 'Your instructor',
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
              {faq.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: index + 1 < faq.length ? spacing.large : 0,
                  }}
                >
                  <Heading level={4}>{item.question}</Heading>
                  <div>{item.answer}</div>
                </div>
              ))}
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
