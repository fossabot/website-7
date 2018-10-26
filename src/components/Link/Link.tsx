import React from 'react'
import { StyledLink } from './Link.style'

interface ILinkProps {
  href: string
}

const Link: React.SFC<ILinkProps> = ({ children, href }) => (
  <StyledLink href={href}>{children}</StyledLink>
)

export default Link
