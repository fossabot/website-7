import React, { Component } from 'react'
import IOrganizer from '../../interfaces/IOrganizer'
import TwitterLink from '../TwitterLink/TwitterLink'
import { Card, Name, ProfileImage, Text } from './OrganizerCard.styles'

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
          alt={`twitter profile image of @${handle}`}
        />
        <Text>
          <Name>{name}</Name>
          <TwitterLink handle={handle} />
          <p>
            {name === 'Christoph Werner'
              ? 'freelance consultant, developer advocate @dSPACEglobal, founder & organizer @PaderbornJS, creator @TekTalks'
              : description}
          </p>
        </Text>
      </Card>
    )
  }
}
