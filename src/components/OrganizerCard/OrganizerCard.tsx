import React from 'react'
import IOrganizer from '../../interfaces/IOrganizer'
import TwitterLink from '../TwitterLink/TwitterLink'
import { Card, Name, ProfileImage, Text } from './OrganizerCard.style'

export interface IOrganizerCardProps {
  organizer: IOrganizer
}

const OrganizerCard: React.SFC<IOrganizerCardProps> = ({
  organizer: {
    name,
    description,
    twitter: { name: handle, profileImageUrl },
  },
}) => (
  <Card>
    <ProfileImage
      src={profileImageUrl}
      alt={`twitter profile image of @${handle}`}
    />
    <Text>
      <Name>{name}</Name>
      <TwitterLink handle={handle} />
      <p>{description}</p>
    </Text>
  </Card>
)

export default OrganizerCard
