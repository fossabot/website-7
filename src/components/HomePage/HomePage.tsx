import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../Layout/Layout'

class HomePage extends Component<RouteComponentProps> {
  public render() {
    return (
      <Layout>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </Layout>
    )
  }
}

export default HomePage
