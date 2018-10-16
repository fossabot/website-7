import { RouteComponentProps } from '@reach/router'
import React, { Component } from 'react'
import OrganizersList from '../OrganizersList/OrganizersList'
import UpcomingEventsList from '../UpcomingEventsList/UpcomingEventsList'

class WipPage extends Component<RouteComponentProps> {
  public render() {
    return (
      <>
        <OrganizersList />
        <UpcomingEventsList />
      </>
    )
  }
}

export default WipPage
