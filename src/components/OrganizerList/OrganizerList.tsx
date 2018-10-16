import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled from 'react-emotion'

interface IOrganizer {
  name: string
  description: string
  twitter: {
    name: string
    profileImageUrl: string
  }
}

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
`

class OrganizerList extends Component {
  public render() {
    return (
      <Query<{ organizers: IOrganizer[] }>
        pollInterval={3600000}
        query={gql`
          query {
            organizers {
              name
              description
              twitter {
                name
                profileImageUrl
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
              {data.organizers.map(
                (
                  {
                    name,
                    description,
                    twitter: { name: handle, profileImageUrl },
                  },
                  i,
                ) => (
                  <li key={i}>
                    {name}
                    <br />
                    {description}
                    <br />
                    <a href={`http://twitter.com/${handle}`}>@{handle}</a>
                    <br />
                    <ProfileImage
                      src={profileImageUrl}
                      alt={`profile image of @${handle}`}
                    />
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

export default OrganizerList
