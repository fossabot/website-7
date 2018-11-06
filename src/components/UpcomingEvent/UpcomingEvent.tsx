import React from 'react'
import Markdown from 'react-markdown'
import IEvent from '../../interfaces/IEvent'
import ITalk from '../../interfaces/ITalk'
import Link from '../Link/Link'
import SubHeadline from '../SubHeadline/SubHeadline'

export interface IUpcomingEventProps {
  event: IEvent
  slotCount?: number
  talks: ITalk[]
}

interface ISlot {
  component: JSX.Element
  free: boolean
}

const FreeSlot: React.SFC = () => <div>free slot</div>

// @todo free slot if less than 2 talks
const UpcomingEvent: React.SFC<IUpcomingEventProps> = ({
  event: { date, goingCount, url },
  slotCount = 2,
  talks,
}) => {
  const slots: ISlot[] = talks.map(talk => ({
    component: (
      <React.Fragment>
        <h3>{talk.title}</h3>
        <img
          src={talk.speaker.avatarUrl}
          alt={talk.speaker.name}
          style={{ width: 100, height: 100 }}
        />
        <div>{talk.speaker.name}</div>
        <div>{talk.speaker.occupation}</div>
        {talk.speaker.socialName &&
          talk.speaker.socialUrl && (
            <div>
              <Link href={talk.speaker.socialUrl}>
                {talk.speaker.socialName}
              </Link>
            </div>
          )}
        <Markdown
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
        <em>
          {new Date(date).toLocaleString('en-us', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </em>
      </SubHeadline>
      <Link href={url}>Are you going? ({goingCount})</Link>
      {slots.map((slot, i) => (
        <article key={i}>{slot.component}</article>
      ))}
    </React.Fragment>
  )
}

export default UpcomingEvent
