import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { PoseGroup } from 'react-pose'
import IOrganizer from '../../interfaces/IOrganizer'
import ContentContainer from '../ContentContainer/ContentContainer'
import Loader from '../Loader/Loader'
import OrganizerCard from '../OrganizerCard/OrganizerCard'
import SubHeadline from '../SubHeadline/SubHeadline'
import { List, ListItem } from './OrganizerList.styles'

const organizerQuery = gql`
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
`

class OrganizerList extends Component {
  public state = {
    profileImagesLoaded: false,
  }

  public render() {
    const { profileImagesLoaded } = this.state

    return (
      <ContentContainer>
        <SubHeadline>Organizers</SubHeadline>
        <Query<{ organizers: IOrganizer[] }>
          pollInterval={3600000}
          query={organizerQuery}
        >
          {({
            loading,
            error,
            data: { organizers = [] } = { organizers: [] },
          }) => {
            // organizer profile pictures are not loaded, so we act as if
            // no organizer information is available until they are
            if (organizers.length && !profileImagesLoaded) {
              this.loadProfileImages(organizers).then(() =>
                this.setState({ profileImagesLoaded: true })
              )

              loading = true
              organizers = []
            }

            return (
              <>
                {loading && <Loader text="Fetching organizers..." />}
                {error && `error: ${error.message}`}
                <List>
                  <PoseGroup animateOnMount={true}>
                    {organizers.map((organizer, i) => (
                      <ListItem key={i} i={i}>
                        <OrganizerCard organizer={organizer} />
                      </ListItem>
                    ))}
                  </PoseGroup>
                </List>
              </>
            )
          }}
        </Query>
      </ContentContainer>
    )
  }

  private loadProfileImages(organizers: IOrganizer[]): Promise<any> {
    return Promise.all(
      organizers.map(
        o =>
          new Promise(resolve => {
            const img = new Image()
            img.onload = resolve
            img.src = o.twitter.profileImageUrl
          })
      )
    )
  }
}

export default OrganizerList
