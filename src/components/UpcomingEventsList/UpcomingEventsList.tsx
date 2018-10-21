import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import IEvent from '../../interfaces/IEvent'
import ContentContainer from '../ContentContainer/ContentContainer'
import Loader from '../Loader/Loader'
import SubHeadline from '../SubHeadline/SubHeadline'

class UpcomingEventsList extends Component {
  public render() {
    return (
      <ContentContainer>
        <SubHeadline>Next Event</SubHeadline>
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
            if (loading || !data) {
              return <Loader text="Fetching events..." />
            }
            if (error) {
              return `error: ${error.message}`
            }
            return (
              <ol
                css={`
                  margin: 0;
                  padding: 0;
                  list-style-type: none;
                  margin-bottom: 5rem;
                `}
              >
                {data.upcomingEvents.map(
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
            )
          }}
        </Query>
      </ContentContainer>
    )
  }
}

export default UpcomingEventsList
