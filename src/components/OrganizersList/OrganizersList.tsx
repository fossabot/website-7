import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { PoseGroup } from 'react-pose'
import IOrganizer from '../../interfaces/IOrganizer'
import AnimatedSection from '../AnimatedSection/AnimatedSection'
import ContentContainer from '../ContentContainer/ContentContainer'
import OrganizerCard from '../OrganizerCard/OrganizerCard'
import { List, ListItem } from './OrganizerList.style'

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

interface IOrganizerListProps {
  background?: string
}

class OrganizerList extends Component<IOrganizerListProps> {
  public state = {
    profileImagesLoaded: false,
  }

  public render() {
    const { profileImagesLoaded } = this.state

    return (
      <ContentContainer
        background={this.props.background}
        slantTop={2}
        slantBottom={-6}
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
                {organizers.length && (
                  <List>
                    <PoseGroup animateOnMount={true}>
                      {organizers.map((organizer: IOrganizer, i: number) => {
                        console.log(i)
                        return (
                          <ListItem key={i} itemIndex={i}>
                            <OrganizerCard organizer={organizer} />
                          </ListItem>
                        )
                      })}
                    </PoseGroup>
                  </List>
                )}
              </AnimatedSection>
            )

            // return (
            //   <>
            //     {loading && <Loader text="Fetching organizers..." />}
            //     {error && `error: ${error.message}`}
            //     {organizers.length && (
            //       <List>
            //         <PoseGroup animateOnMount={true}>
            //           {organizers.map((organizer, i) => (
            //             <ListItem key={i} index={i}>
            //               <OrganizerCard organizer={organizer} />
            //             </ListItem>
            //           ))}
            //         </PoseGroup>
            //       </List>
            //     )}
            //   </>
            // )
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
