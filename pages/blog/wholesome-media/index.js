import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import Anchor from '../../../components/Anchor'
import Code from '../../../components/Code'

const WholesomeMedia = () => (
  <PageWithBlogPost
    id="wholesome-media"
    sections={[
      {
        title: `Why?`,
        component: (
          <div>
            <Paragraph>
              I avoid pornography and other unwholesome media for both{' '}
              <Anchor href="http://fightthenewdrug.org/get-the-facts/">
                scientific
              </Anchor>{' '}
              and{' '}
              <Anchor href="https://www.lds.org/topics/pornography">
                spiritual
              </Anchor>{' '}
              reasons. I believe things like pornography alter your brain and
              spirit in damaging ways. I try to do all I can to keep it out of
              my home and life.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `First defense: internal`,
        component: (
          <div>
            <Paragraph>
              The first defense is a good offense. No amount of filters or
              settings can stop someone from viewing pornography or other
              unwholesome media if they want to view it. The first step is
              desire to avoid it and to have good things to replace it with.
              This comes from understanding why it’s harmful. Internal desire is
              the most important thing that keeps pornography and other crude
              media out of my life.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Second defense: filters`,
        component: (
          <div>
            <Paragraph>
              Although filters can’t stop someone who wants to view pornography,
              they can be helpful for avoiding accidentally viewing pornography.
              The filter options below can be helpful.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Filters for your network`,
        component: (
          <div>
            <Paragraph>
              You can add a filter to your network; this is the most useful
              filter since it affects any device using your internet. I use{' '}
              <Anchor href="https://www.opendns.com/setupguide/?url=familyshield">
                OpenDNS Family Shield
              </Anchor>. This protects against adult content. It has some side
              benefits too; it protects against identity theft via phishing
              websites (it warns you if a website is fraudulent), and it can
              speed up your internet since open DNS has 100% uptime, unlike most
              ISPs.
            </Paragraph>
            <Image
              src="/static/opendns.jpg"
              description="OpenDNS Family Shield blocker"
            />
            <Image
              src="/static/opendns-phishing.jpg"
              description="OpenDNS Family Shield phishing blocker"
            />
            <Paragraph>
              You just have to make sure you use the “Family Shield” name
              servers instead of the default ones on your network. The default
              ones in the instructions block phishing, but “Family Shield”
              blocks both phishing and pornography.
            </Paragraph>
            <Image
              src="/static/opendns-nameservers.jpg"
              description="OpenDNS Family Shield nameservers"
            />
            <Paragraph>
              One thing to note is that, although a network filter is helpful
              for wifi and ethernet connections, it doesn't affect devices using
              cellular data (not on your network).
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Filters for search engines`,
        component: (
          <div>
            <Paragraph>
              Most search engines have a “safety” feature of some sort. For
              example, Google has the{' '}
              <Anchor href="https://www.google.com/safetycenter/families/start/#get-family-friendly-results-from-search">
                “SafeSearch” option
              </Anchor>{' '}
              in{' '}
              <Anchor href="https://www.google.com/preferences">
                your preferences
              </Anchor>, which you can also lock.
            </Paragraph>
            <Image
              src="/static/google-safesearch.jpg"
              description="Google safe search"
            />
            <Paragraph>
              Keep in mind that there are hundreds of other search engines other
              than Google all with their own settings. Also, this does not
              effect incognito mode or other browser profiles. To ensure safe
              search is used across all profiles and devices for Google search,{' '}
              <Anchor href="https://support.google.com/websearch/answer/186669?hl=en">
                SafeSearch VIP needs to be enabled at the network level which
                only certain networks support
              </Anchor>. Keep in mind that none of this applies when using a
              data connection on a mobile device or through a hotspot instead of
              wifi or a direct ethernet connection.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Filters for browsers`,
        component: (
          <div>
            <Paragraph>
              You can configure some browsers. For example, on a Mac, you can
              disable incognito mode in Chrome by pasting{' '}
              <Code>
                defaults write com.google.chrome IncognitoModeAvailability
                -integer 1
              </Code>{' '}
              in the “Terminal” app, hitting enter, and restarting your
              computer.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Filters for Apple devices`,
        component: (
          <div>
            <Paragraph>
              Apple devices have a{' '}
              <Anchor href="https://support.apple.com/en-us/HT201304">
                Restricted Mode
              </Anchor>{' '}
              that can be enabled to filter out adult content. The nice thing
              about this is it affects most browsers and apps on iOS
              (iPhone/iPads), macOS (Macs), and tvOS (Apple TVs) since most of
              them use Apple Safari and the Restricted mode setting under the
              hood. However, not all apps and browsers use the standard settings
              so there are still ways to get around it.
            </Paragraph>
            <Image
              src="/static/apple-restrictions.png"
              description="Apple restrictions limit adult content"
            />
          </div>
        ),
      },
      {
        title: `Filters for Android devices`,
        component: (
          <div>
            <Paragraph>
              Android device don’t generally have any built-in filtering. There
              are apps available on the apps store. Having a network level
              filter in place like OpenDNS Family Shield is a good first step.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Filters for apps`,
        component: (
          <div>
            <Paragraph>
              Many apps have filtering options. For example, in YouTube, you can
              add{' '}
              <Anchor href="https://www.google.com/safetycenter/families/start/#set-a-filter-to-keep-inappropriate-content-out">
                Restricted Mode Filtering
              </Anchor>. For Netflix, you can add{' '}
              <Anchor href="https://help.netflix.com/en/node/264">
                Rating Controls
              </Anchor>. In Hulu, you can{' '}
              <Anchor href="https://help.hulu.com/s/article/ka041000000sjV7AAI/parental-controls?language=en_US">
                contact Hulu support
              </Anchor>{' '}
              to have them set your age below 17 years old, which will disable
              mature content like TV-MA programs. In Amazon Video, you can add{' '}
              <Anchor href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201423070">
                Parental Controls
              </Anchor>.
            </Paragraph>
            <Image
              src="/static/netflix-restrictions.jpg"
              description="Netflix explicit content filtering"
            />
          </div>
        ),
      },
      {
        title: `Third defense: research`,
        component: (
          <div>
            <Paragraph>
              It can be helpful to research media before consuming it. There are
              many tools available to help with this. One I like for movies is{' '}
              <Anchor href="https://www.commonsensemedia.org/">
                Common Sense Media
              </Anchor>. It lets you see what type of content is in a movie
              before watching it to help you avoid uncomfortable situations.
            </Paragraph>
            <Image
              src="/static/common-sense-media.png"
              description="Common sense media research"
            />
          </div>
        ),
      },
      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              I believe that the type of media we use has a large influence on
              our thoughts and feelings. By avoiding unwholesome media I feel it
              gives me greater positivity and light in my life. Although using
              tools like filters and device settings can be helpful to avoid
              unwholesome media, the most important thing is an internal desire
              to avoid it.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)

export default WholesomeMedia
