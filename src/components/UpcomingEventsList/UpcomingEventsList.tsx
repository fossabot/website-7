import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled from 'react-emotion'
import Loader from '../Loader/Loader'
import SubHeadline from '../SubHeadline/SubHeadline'

interface IEvent {
  date: Date
  goingCount: number
  url: string
  venue: {
    city: string
    country: string
    lat: number
    lon: number
    name: string
    street: string
  }
}

const UpcomingEventsListContainer = styled.section`
  display: flex;
  flex-direction: column;
`

class UpcomingEventsList extends Component {
  public render() {
    return (
      <UpcomingEventsListContainer>
        <SubHeadline>Upcoming Events</SubHeadline>
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
          {({ loading, error, data }) => {
            if (loading || !data) {
              return <Loader text="Fetching events..." />
            }
            if (error) {
              return `error: ${error.message}`
            }
            return (
              <>
                <Loader text="Fetching events..." />
                <ol>
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
                        <hr />
                      </li>
                    )
                  )}
                </ol>
              </>
            )
          }}
        </Query>
      </UpcomingEventsListContainer>
    )
  }
}

export default UpcomingEventsList
