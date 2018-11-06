import React from 'react'
import { HeadlineContainer, HeadlineText } from './SubHeadline.style'

export interface ISubHeadlineProps {
  underline?: string
}

const SubHeadline: React.SFC<ISubHeadlineProps> = ({ children, underline }) => (
  <HeadlineContainer>
    <HeadlineText underline={underline}>{children}</HeadlineText>
  </HeadlineContainer>
)

export default SubHeadline
