import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled from 'react-emotion'
import GlitchImage, { IGlitchImageProps } from '../GlitchImage/GlitchImage'
import Loader from '../Loader/Loader'
import SubHeadline from '../SubHeadline/SubHeadline'

interface IOrganizer {
  name: string
  description: string
  twitter: {
    name: string
    profileImageUrl: string
  }
}

const Name = styled.h3`
  font-size: 2.6rem;
  font-weight: 400;
  color: #fff;
  margin: 0;
  margin-bottom: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const List = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: 0 1rem;
  width: 33.333333%;
  display: inline-block;
  vertical-align: top;
`

const ListItemContent = styled.div`
  background: #f3f9fb;
  margin-bottom: 4rem;
`

const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4rem;
  z-index: 2;
  position: relative;
  padding: 0 1rem 1.4rem 1rem;
`

const OrganizerListContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const TwitterLink: React.SFC<{ handle: string }> = ({ handle }) => (
  <a
    href={`http://twitter.com/${handle}`}
    css={`
      color: #0662f1;
      font-weight: 500;
      text-decoration: none;
      margin-bottom: 0.25rem;
    `}
  >
    @{handle}
  </a>
)

const Image = styled(GlitchImage)<IGlitchImageProps>`
  width: 100%;
  height: 30rem;
`

class OrganizerList extends Component {
  public render() {
    return (
      <OrganizerListContainer>
        <SubHeadline>Organizers</SubHeadline>
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
              return <Loader text="Fetching organizers..." />
            }
            if (error) {
              return `error: ${error.message}`
            }
            return (
              <List>
                {data.organizers.map(
                  (
                    {
                      name,
                      description,
                      twitter: { name: handle, profileImageUrl },
                    },
                    i
                  ) => (
                    <ListItem key={i}>
                      <ListItemContent>
                        <Image
                          src={profileImageUrl}
                          alt={`twitter profile image of @${handle}`}
                        />
                        <TextContainer>
                          <Name>{name}</Name>
                          <TwitterLink handle={handle} />
                          <Description>{description}</Description>
                        </TextContainer>
                      </ListItemContent>
                    </ListItem>
                  )
                )}
              </List>
            )
          }}
        </Query>
      </OrganizerListContainer>
    )
  }
}

export default OrganizerList
