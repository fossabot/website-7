import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import Link from '../Link/Link'
import SubHeadline from '../SubHeadline/SubHeadline'
import { ColumnWrapper } from './AboutSection.style'

const AboutSection: React.SFC = () => (
  <ContentContainer>
    <SubHeadline underline="#82a3bf">What is this all about?</SubHeadline>
    <ColumnWrapper>
      <p>
        Paderborn.js is a usergroup focused on JavaScript and related topics. We
        meet regularly on the 4th Thursday of every month at 6.30pm at dSPACE,
        Rathenaustraße 26 in Paderborn.
      </p>
      <p>
        We welcome a diverse range of topics that are related in any way to
        JavaScript and the community around it. New speakers, experienced
        speakers, and everyone in between. If you have an idea you aren't sure
        about, just reach out or add it as an issue in our{' '}
        <Link href="https://github.com/paderbornjs/talks">
          Paderborn.js talks repository
        </Link>
        !
      </p>
      <p>
        Join the <Link href="#">Meetup community</Link> to get in contact with
        both organizers and other members of the community! Also, feel free to{' '}
        <Link href="https://twitter.com/paderbornjs">follow us on Twitter</Link>{' '}
        or tweet about our events using the hashtag{' '}
        <span
          css={`
            font-weight: 300;
          `}
        >
          #paderbornjs
        </span>
        !
      </p>
      <p>
        This meetup is primarily in german, but if we have any non-german
        speaking attendees, we try to switch to english. We look forward to
        hearing from you, and to seeing you at an upcoming event!
      </p>
    </ColumnWrapper>
  </ContentContainer>
)

export default AboutSection
