import React from 'react'
import Page from '../Page'
import Heading from '../Heading'
import Anchor from '../Anchor'
import Button from '../Button'
import Avatar from '../Avatar'
import Icon from '../Icon'
import List from '../List'
import Video from '../Video'
import { courses } from '../../pages/courses'
import { spacing, fontSizes, uiGroups, syntaxGroups } from '../../utils/theme'

const PageWithCourse = ({ id }) => {
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
    0,
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
    <Page
      baseRouteKey="courses"
      mainVisual={course.mainVisual}
      showMainVisual
      pathname={`https://trevordmiller.com/courses/${id}`}
      title={course.title}
      description={course.description}
      tags={course.tags}
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
                `All videos can be downloaded so you aren't locked into where you can view them`,
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
              examples in the course use specific languages and tools, but serve
              only to illustrate one way of applying those timeless principles.
              You don’t need to know the specific languages or tools shown. The
              lessons work with whatever coding language, editor, terminal
              emulator etc. that you use.
            </div>
          ),
        },

        {
          title: 'Your instructor',
          component: (
            <div>
              <div
                style={{
                  marginBottom: spacing.small,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 100,
                    minWidth: 100,
                  }}
                >
                  <Avatar />
                </div>
                <div
                  style={{
                    marginLeft: spacing.medium,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Heading level={2}>
                    Well hello there! My name is Trevor.
                  </Heading>
                </div>
              </div>

              <div>
                I've been programming for over 10 years. I've been teaching
                programming for over 5 years through coding bootcamps,
                workshops, meetups, conferences, online courses, and as the
                former Director of Instruction at egghead.io. All in all, I've
                taught thousands of people how to be more effective developers.
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

export default PageWithCourse
