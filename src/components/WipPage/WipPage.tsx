import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../Layout/Layout'
import OrganizersList from '../OrganizersList/OrganizersList'
import Separator from '../Separator/Separator'
import UpcomingEventsList from '../UpcomingEventsList/UpcomingEventsList'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>
        <Separator heightVw={5} topColor="#e9f2f5" bottomColor="#d6e5ea" />
        <OrganizersList />
        <Separator
          heightVw={7}
          topColor="#d6e5ea"
          bottomColor="#e9f2f5"
          reverse
        />
        <UpcomingEventsList />
      </Layout>
    )
  }
}

export default WipPage
