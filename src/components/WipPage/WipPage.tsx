import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import styled from 'react-emotion'
import { Helmet } from 'react-helmet'
import CodeOfConduct from '../CodeOfConduct/CodeOfConduct'
import Layout from '../Layout/Layout'
import OrganizersList from '../OrganizersList/OrganizersList'
import Separator from '../Separator/Separator'
import UpcomingEventsList from '../UpcomingEventsList/UpcomingEventsList'

const DarkContainer = styled.section`
  background: #d6e5ea;
`

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Work in Progress</title>
        </Helmet>
        <Separator heightVw={5} topColor="#e9f2f5" bottomColor="#d6e5ea" />
        <DarkContainer>
          <OrganizersList />
        </DarkContainer>
        <Separator heightVw={5} topColor="#d6e5ea" bottomColor="#e9f2f5" />
        <CodeOfConduct />
        <UpcomingEventsList />
      </Layout>
    )
  }
}

export default WipPage
