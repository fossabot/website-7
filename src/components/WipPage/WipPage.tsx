import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CodeOfConduct from '../CodeOfConduct/CodeOfConduct'
import ContentContainer from '../ContentContainer/ContentContainer'
import Layout from '../Layout/Layout'
import OrganizersList from '../OrganizersList/OrganizersList'
import SubHeadline from '../SubHeadline/SubHeadline'
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>
        <UpcomingEvents />
        <ContentContainer>
          <SubHeadline>What is this all about?</SubHeadline>
          <p>
            - Meet monthly
            <br />- Talk about new javaScript stuff, get to know new people
            <br />- Links to: Twitter, Meetup, Talks Repo
            <br />- English vs german
            <br />
          </p>
        </ContentContainer>
        <OrganizersList background="#d6e5ea" />
        <ContentContainer>
          <SubHeadline>Location</SubHeadline>
          <p>Embedded Maps</p>
        </ContentContainer>
        <ContentContainer background="#fff" slantTop={3} slantBottom={-1}>
          <SubHeadline>Sponsors</SubHeadline>
          <p>Hosting, Food/Drinks, Domain/Meetup</p>
        </ContentContainer>
        <CodeOfConduct />
      </Layout>
    )
  }
}

export default WipPage
