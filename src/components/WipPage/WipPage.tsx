import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { darkBackground, lightBackground } from '../../style/colors'
import AboutSection from '../AboutSection/AboutSection'
import CocSection from '../CocSection/CocSection'
import ContentContainer from '../ContentContainer/ContentContainer'
import EventsSection from '../EventsSection/EventsSection'
import Layout from '../Layout/Layout'
import LocationSection from '../LocationSection/LocationSection'
import OrganizerSection from '../OrganizerSection/OrganizerSection'
import SubHeadline from '../SubHeadline/SubHeadline'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>
        <EventsSection
          background={lightBackground}
          slantTop={0}
          slantBottom={-2}
        />
        <AboutSection />
        <OrganizerSection
          background={darkBackground}
          slantTop={2}
          slantBottom={-1}
        />
        <LocationSection />
        <ContentContainer
          background={lightBackground}
          slantTop={1}
          slantBottom={-3}
        >
          <SubHeadline>Sponsors</SubHeadline>
          <p>
            We're looking for a location where we can regularly host our meetup.
            Sponsors that provide drinks/snacks as well as expense
            reimbursements for hosting, domains and the meetup.com account are
            welcome and will be listed and linked both here and on the
            meetup.com page.
          </p>
        </ContentContainer>
        <CocSection />
      </Layout>
    )
  }
}

export default WipPage
