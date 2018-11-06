import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import IEvent from '../../interfaces/IEvent'
import ITalk from '../../interfaces/ITalk'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import ContentContainer, {
  IContentContainerProps,
} from '../ContentContainer/ContentContainer'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'

const eventsAndTalksQuery = gql`
  query {
    upcomingEvents {
      date
      goingCount
      url
      venue {
        city
        country
        lat
        lon
        name
        street
      }
    }
    upcomingTalks {
      title
      description
      date
      speaker {
        name
        occupation
        socialName
        socialUrl
        avatarUrl
      }
      isLightningTalk
      labels
    }
  }
`

class EventsSection extends Component<IContentContainerProps> {
  public render() {
    return (
      <ContentContainer
        background={this.props.background}
        slantTop={this.props.slantTop}
        slantBottom={this.props.slantBottom}
      >
        <Query<{ upcomingEvents: IEvent[]; upcomingTalks: ITalk[] }>
          pollInterval={1800000}
          query={eventsAndTalksQuery}
        >
          {({
            loading,
            error,
            data: { upcomingEvents = [], upcomingTalks = [] } = {
              upcomingEvents: [],
              upcomingTalks: [],
            },
          }) => {
            return (
              <AnimatedSection isLoading={loading} delayLoading={1000}>
                {upcomingEvents.length ? (
                  <UpcomingEvent
                    event={upcomingEvents[0]}
                    talks={upcomingTalks}
                    // talks={upcomingTalks.filter(
                    //   talk =>
                    //     new Date(talk.date).getUTCDate() ===
                    //     new Date(upcomingEvents[0].date).getUTCDate()
                    // )}
                  />
                ) : error ? (
                  error.message
                ) : (
                  ''
                )}
              </AnimatedSection>
            )
          }}
        </Query>
      </ContentContainer>
    )
  }
}

export default EventsSection
