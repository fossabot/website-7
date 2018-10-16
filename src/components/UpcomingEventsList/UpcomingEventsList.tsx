import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'

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

class UpcomingEventsList extends Component {
  public render() {
    return (
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
            return 'loading...'
          }
          if (error) {
            return `error: ${error.message}`
          }
          return (
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
                ),
              )}
            </ol>
          )
        }}
      </Query>
    )
  }
}

export default UpcomingEventsList
