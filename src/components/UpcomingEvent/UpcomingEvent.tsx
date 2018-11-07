import React from 'react'
import styled from 'react-emotion'
import Markdown from 'react-markdown'
import IEvent from '../../interfaces/IEvent'
import ITalk from '../../interfaces/ITalk'
import Link from '../Link/Link'
import SubHeadline from '../SubHeadline/SubHeadline'

const Description = styled(Markdown)`
  margin: 2.4rem 0 0 0;
  text-align: left;

  p {
    margin: 0;
  }
`

const Title = styled.h3`
  margin: 0 0 2.4rem 0;
  font-weight: 500;
`

const Emphasize = styled.em`
  font-style: normal;
  font-weight: 500;
`

const CallToAction = styled(Link)`
  padding: 1rem 2rem;
  background: green;

  &:link,
  &:visited,
  &:focus,
  &:hover,
  &:active {
    color: white;
  }

  &::before,
  &::after {
    content: none;
  }
`

const Slot = styled.div`
  background: #e9f2f5;
  padding: 1.3rem;
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
  min-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  &::before,
  &::after {
    content: '';
    background: inherit;
    position: absolute;
    z-index: -1;
    border: 0;
    height: 50px;
    left: 0;
    right: 0;
  }

  &::before {
    top: -15px;
    transform: skewY(-2deg);
  }

  &:first-child::before {
    transform: skewY(-1deg);
    top: -4px;
  }

  &::after {
    bottom: -7px;
    transform: skewY(1deg);
  }

  &:first-child::after {
    transform: skewY(-2deg);
    bottom: -10px;
  }

  @media (min-width: 768px) {
    min-width: 49%;
    width: 49%;
    margin-bottom: 0;

    &:first-child {
      margin-right: 2%;
    }
  }
`

export interface IUpcomingEventProps {
  event: IEvent
  slotCount?: number
  talks: ITalk[]
}

interface ISlot {
  component: JSX.Element
  free: boolean
}

const FreeSlot: React.SFC = () => (
  <React.Fragment>
    <Title>Free slot!</Title>
  </React.Fragment>
)

// @todo free slot if less than 2 talks
const UpcomingEvent: React.SFC<IUpcomingEventProps> = ({
  event: { date, goingCount, url },
  slotCount = 2,
  talks,
}) => {
  const slots: ISlot[] = talks.map(talk => ({
    component: (
      <React.Fragment>
        <Title>{talk.title}</Title>
        <img
          src={talk.speaker.avatarUrl}
          alt={talk.speaker.name}
          style={{ width: 100, height: 100 }}
        />
        <div style={{ fontWeight: 500 }}>{talk.speaker.name}</div>
        <div>{talk.speaker.occupation}</div>
        {talk.speaker.socialName &&
          talk.speaker.socialUrl && (
            <div>
              <Link href={talk.speaker.socialUrl}>
                {talk.speaker.socialName}
              </Link>
            </div>
          )}
        <Description
          source={talk.description}
          skipHtml={true}
          renderers={{
            link: props => <Link {...props} />,
          }}
        />
      </React.Fragment>
    ),
    free: false,
  }))

  if (slots.length < slotCount) {
    for (let x = slots.length; x < slotCount; x++) {
      slots.push({ component: <FreeSlot />, free: true })
    }
  }

  return (
    <React.Fragment>
      <SubHeadline underline="transparent">
        Next Meetup on{' '}
        <Emphasize>
          {new Date(date).toLocaleString('en-us', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Emphasize>
      </SubHeadline>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '5rem',
        }}
      >
        <CallToAction href={url}>Are you going? ({goingCount})</CallToAction>
      </div>
      <SubHeadline>Upcoming Talks</SubHeadline>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {slots.map((slot, i) => (
          <Slot key={i}>{slot.component}</Slot>
        ))}
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvent
