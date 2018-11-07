import React from 'react'
import { StyledLink } from './Link.style'

interface ILinkProps {
  href: string
}

const Link: React.SFC<ILinkProps> = props => <StyledLink {...props} />

export default Link
