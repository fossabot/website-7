import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import { Headline, Logo, LogoContainer, Punchline } from './Header.style'

const Header: React.SFC = () => (
  <ContentContainer>
    <LogoContainer>
      <Headline>Paderborn</Headline>
      <Logo />
    </LogoContainer>
    <Punchline>
      Welcome to Paderborn.js – the JavaScript Meetup in Paderborn.
    </Punchline>
  </ContentContainer>
)

export default Header
