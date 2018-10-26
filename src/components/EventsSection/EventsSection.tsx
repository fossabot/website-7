import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import IEvent from '../../interfaces/IEvent'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import ContentContainer, {
  IContentContainerProps,
} from '../ContentContainer/ContentContainer'
import Link from '../Link/Link'

class EventsSection extends Component<IContentContainerProps> {
  public render() {
    return (
      <ContentContainer
        background={this.props.background}
        slantTop={this.props.slantTop}
        slantBottom={this.props.slantBottom}
      >
        <Query<{ upcomingEvents: IEvent[] }>
          pollInterval={1800000}
          query={gql`
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
            }
          `}
        >
          {({
            loading,
            error,
            data: { upcomingEvents = [] } = { upcomingEvents: [] },
          }) => {
            return (
              <AnimatedSection
                headline="Next event"
                isLoading={loading}
                delayLoading={1000}
              >
                {upcomingEvents.length
                  ? upcomingEvents.map(
                      ({ date, goingCount, url, venue: { lat, lon } }, i) => (
                        <div key={i}>
                          {date}
                          <br />
                          going: {goingCount}
                          <br />
                          <Link href={url}>{url}</Link>
                          <br />
                          venue {lat}/{lon}
                        </div>
                      )
                    )
                  : error
                    ? error.message
                    : ''}
              </AnimatedSection>
            )
          }}
        </Query>
      </ContentContainer>
    )
  }
}

export default EventsSection
