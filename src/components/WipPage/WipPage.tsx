import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import OrganizerList from '../OrganizerList/OrganizerList'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return <OrganizerList />
  }
}

export default WipPage
