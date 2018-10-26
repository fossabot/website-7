import React from 'react'
import IOrganizer from '../../interfaces/IOrganizer'
import Link from '../Link/Link'
import {
  Card,
  LinkWrapper,
  Name,
  ProfileImage,
  Text,
  TwitterLogo,
} from './OrganizerCard.style'

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
      <LinkWrapper>
        <Link href={`http://twitter.com/${handle}`}>
          <TwitterLogo />
          {handle}
        </Link>
      </LinkWrapper>
      <p>{description}</p>
    </Text>
  </Card>
)

export default OrganizerCard
