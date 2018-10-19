import React, { Component } from 'react'
import IOrganizer from '../../interfaces/IOrganizer'
import TwitterLink from '../TwitterLink/TwitterLink'
import { Card, Description, ProfileImage, Text } from './OrganizerCard.styles'

interface IOrganizerCardProps {
  organizer: IOrganizer
}

export default class OrganizerCard extends Component<IOrganizerCardProps> {
  public render() {
    const {
      name,
      description,
      twitter: { name: handle, profileImageUrl },
    } = this.props.organizer

    return (
      <Card>
        <ProfileImage
          src={profileImageUrl}
          text={name}
          alt={`twitter profile image of @${handle}`}
        />
        <Text>
          <TwitterLink handle={handle} />
          <Description>{description}</Description>
        </Text>
      </Card>
    )
  }
}
