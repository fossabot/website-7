import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled from 'react-emotion'
import ContentContainer from '../ContentContainer/ContentContainer'
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

const List = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  vertical-align: top;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 550px) and (max-width: 749px) {
    width: 49%;
    margin-left: 1%;
    margin-right: 1%;

    &:nth-of-type(2n + 1) {
      margin-left: 0;
      margin-right: 1%;
    }
    &:nth-of-type(2n) {
      margin-left: 1%;
      margin-right: 0;
    }
  }

  @media (min-width: 750px) {
    width: 32%;
    margin-left: 1%;
    margin-right: 1%;

    &:nth-of-type(3n + 1) {
      margin-left: 0;
      margin-right: 1%;
    }
    &:nth-of-type(3n) {
      margin-left: 1%;
      margin-right: 0;
    }
  }
`

const ListItemContent = styled.div`
  background: #f3f9fb;
  height: 100%;
`

const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  padding: 0 1rem 1.4rem 1rem;
`

const OrganizerListContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #d6e5ea;
`

const TwitterLink: React.SFC<{ handle: string }> = ({ handle }) => (
  <a
    href={`http://twitter.com/${handle}`}
    css={`
      color: #0662f1;
      font-weight: 500;
      text-decoration: none;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
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
        <ContentContainer>
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
                            text={name}
                            alt={`twitter profile image of @${handle}`}
                          />
                          <TextContainer>
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
        </ContentContainer>
      </OrganizerListContainer>
    )
  }
}

export default OrganizerList
