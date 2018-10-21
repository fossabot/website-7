import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import IEvent from 'interfaces/IEvent'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled from 'react-emotion'
import { Helmet } from 'react-helmet'
import posed, { PoseGroup } from 'react-pose'
import CodeOfConduct from '../CodeOfConduct/CodeOfConduct'
import ContentContainer from '../ContentContainer/ContentContainer'
import Layout from '../Layout/Layout'
import Loader from '../Loader/Loader'
import OrganizersList from '../OrganizersList/OrganizersList'
import Separator from '../Separator/Separator'
import SubHeadline from '../SubHeadline/SubHeadline'

const AnimatedSection = styled(
  posed.div({
    data: {
      height: 'auto',
      transition: {
        height: { ease: [0.4, 0.0, 0.2, 1], duration: 150 },
      },
    },
    loading: {
      height: 140,
      opacity: 1,
      transition: {
        height: { ease: [0.4, 0.0, 0.2, 1], duration: 150 },
      },
    },
    start: { height: 0, opacity: 0 },
  })
)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const LoaderAnimation = posed.div({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 150,
      opacity: { ease: [0.4, 0.0, 0.2, 1] },
      scale: { ease: [0.0, 0.0, 0.2, 1] },
    },
  },
  exit: { opacity: 0, transition: { duration: 100 } },
  start: { opacity: 0, scale: 0.95 },
})

const HeadlineAnimation = posed.div({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 100,
      duration: 200,
      opacity: { ease: [0.4, 0.0, 0.2, 1] },
      scale: { ease: [0.0, 0.0, 0.2, 1] },
    },
  },
  exit: { opacity: 1, transition: { duration: 100 } },
  start: { opacity: 0, scale: 0.95 },
})

const ContentAnimation = posed.div({
  enter: { opacity: 1, scale: 1, transition: { delay: 150, duration: 200 } },
  exit: { opacity: 1, transition: { duration: 100 } },
  start: { opacity: 0, scale: 0.95 },
})

class WipPage extends Component<RouteComponentProps> {
  public state = {
    pose: 'start',
  }

  public componentDidMount() {
    window.setTimeout(() => this.setState({ pose: 'loading' }), 0)
    window.setTimeout(() => this.setState({ pose: 'data' }), 1000)
  }

  // do we still need react-sizeme when animating height to 'auto'?
  public render() {
    const { pose } = this.state

    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>

        <ContentContainer backgroundColor="#fff">
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
              loading: actuallyLoading,
              error,
              data: { upcomingEvents = [] } = { upcomingEvents: [] },
            }) => {
              console.log(actuallyLoading, error, upcomingEvents, 'pose', pose)
              return (
                <AnimatedSection pose={pose}>
                  <PoseGroup animateOnMount={true} preEnterPose="start">
                    {[
                      ...(actuallyLoading || pose === 'loading'
                        ? [
                            <LoaderAnimation
                              key="loader"
                              css={`
                                margin: 4.5rem 0;
                              `}
                            >
                              <Loader defer={0} />
                            </LoaderAnimation>,
                          ]
                        : []),
                      ...(upcomingEvents.length && pose === 'data'
                        ? [
                            <HeadlineAnimation key="headline">
                              <SubHeadline>
                                Next Meetup
                                <br />
                                ✔️ October, 27th
                              </SubHeadline>
                            </HeadlineAnimation>,
                            <ContentAnimation key="content">
                              <ol
                                css={`
                                  margin: 0;
                                  padding: 0;
                                  list-style-type: none;
                                  margin-bottom: 5rem;
                                `}
                              >
                                {upcomingEvents.map(
                                  (
                                    {
                                      date,
                                      goingCount,
                                      url,
                                      venue: { lat, lon },
                                    },
                                    i
                                  ) => (
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
                            </ContentAnimation>,
                          ]
                        : []),
                    ]}
                  </PoseGroup>
                </AnimatedSection>
              )
            }}
          </Query>
        </ContentContainer>
        <ContentContainer>
          <SubHeadline>What is this all about?</SubHeadline>
          <p
            css={`
              margin-bottom: 5rem;
            `}
          >
            - Meet monthly
            <br />- Talk about new javaScript stuff, get to know new people
            <br />- Links to: Twitter, Meetup, Talks Repo
            <br />- English vs german
            <br />
          </p>
        </ContentContainer>
        <Separator heightVw={5} topColor="#e9f2f5" bottomColor="#d6e5ea" />
        <OrganizersList backgroundColor="#d6e5ea" />
        <Separator heightVw={5} topColor="#d6e5ea" bottomColor="#e9f2f5" />
        <ContentContainer>
          <SubHeadline>📌 Location</SubHeadline>
          <p
            css={`
              margin-bottom: 5rem;
            `}
          >
            Embedded Maps
          </p>
        </ContentContainer>
        <Separator
          heightVw={3}
          topColor="#e9f2f5"
          bottomColor="#fff"
          reverse={true}
        />
        <ContentContainer backgroundColor="#fff">
          <SubHeadline>Sponsors</SubHeadline>
          <div
            css={`
              margin-bottom: 5rem;
            `}
          >
            Hosting, Food/Drinks, Domain/Meetup
          </div>
        </ContentContainer>
        <Separator
          heightVw={3}
          topColor="#fff"
          bottomColor="#e9f2f5"
          reverse={true}
        />
        <CodeOfConduct />
      </Layout>
    )
  }
}

export default WipPage
