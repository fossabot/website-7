import React from 'react'
import { Link } from './TwitterLink.style'

interface ITwitterLinkProps {
  handle: string
}

export const TwitterLink: React.SFC<ITwitterLinkProps> = ({
  handle,
}: ITwitterLinkProps) => (
  <Link href={`http://twitter.com/${handle}`}>@{handle}</Link>
)

export default TwitterLink
