import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../Layout/Layout'
import OrganizersList from '../OrganizersList/OrganizersList'
import UpcomingEventsList from '../UpcomingEventsList/UpcomingEventsList'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>
        <OrganizersList />
        <UpcomingEventsList />
      </Layout>
    )
  }
}

export default WipPage
