import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { PoseGroup } from 'react-pose'
import IOrganizer from '../../interfaces/IOrganizer'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import ContentContainer, {
  IContentContainerProps,
} from '../ContentContainer/ContentContainer'
import OrganizerCard from '../OrganizerCard/OrganizerCard'
import { List, ListItem } from './OrganizerSection.style'

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

class OrganizerSection extends Component<IContentContainerProps> {
  public state = {
    profileImagesLoaded: false,
  }

  public render() {
    const { profileImagesLoaded } = this.state

    return (
      <ContentContainer
        background={this.props.background}
        slantTop={this.props.slantTop}
        slantBottom={this.props.slantBottom}
      >
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
              <AnimatedSection
                headline="Organizers"
                isLoading={loading}
                delayLoading={1000}
              >
                <p
                  css={`
                    text-align: center;
                  `}
                >
                  Please get in touch with the organizers with any questions you
                  have.
                </p>
                <List>
                  <PoseGroup animateOnMount={true}>
                    {organizers.length ? (
                      organizers.map((organizer: IOrganizer, i: number) => (
                        <ListItem key={i} itemIndex={i}>
                          <OrganizerCard organizer={organizer} />
                        </ListItem>
                      ))
                    ) : error ? (
                      <div key={0}>{error.message}</div>
                    ) : (
                      <></>
                    )}
                  </PoseGroup>
                </List>
              </AnimatedSection>
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

export default OrganizerSection
