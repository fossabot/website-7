import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import IEvent from '../../interfaces/IEvent'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import ContentContainer from '../ContentContainer/ContentContainer'

class UpcomingEvents extends Component {
  public render() {
    return (
      <ContentContainer background="#fff" slantTop={0} slantBottom={-2}>
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
                <ol>
                  {upcomingEvents.map(
                    ({ date, goingCount, url, venue: { lat, lon } }, i) => (
                      <li key={i}>
                        {date}
                        <br />
                        going: {goingCount}
                        <br />
                        <a href={url}>{url}</a>
                        <br />
                        venue {lat}/{lon}
                      </li>
                    )
                  )}
                </ol>
              </AnimatedSection>
            )
          }}
        </Query>
      </ContentContainer>
    )
  }
}

export default UpcomingEvents
