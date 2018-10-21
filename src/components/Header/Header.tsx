import React, { Component } from 'react'
import styled from 'react-emotion'
import ContentContainer from '../ContentContainer/ContentContainer'
import { ReactComponent as JavaScriptLogo } from './javascript.svg'

const Logo = styled(JavaScriptLogo)`
  width: 6rem;
  margin-left: 1em;

  @media (min-width: 550px) and (max-width: 799px) {
    width: 8rem;
  }
  @media (min-width: 800px) {
    width: 10rem;
  }
`

const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  color: #12223c;
`

const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 550px) and (max-width: 799px) {
    font-size: 5rem;
  }
  @media (min-width: 800px) {
    font-size: 6rem;
  }
`

class Header extends Component {
  public render() {
    return (
      <ContentContainer>
        <LogoContainer>
          <Headline>Paderborn</Headline>
          <Logo />
        </LogoContainer>
        <p
          css={`
            text-align: center;
            margin-bottom: 5rem;
            font-size: 1.8rem;

            @media (min-width: 550px) and (max-width: 799px) {
              font-size: 2rem;
            }
            @media (min-width: 800px) {
              font-size: 2.2rem;
            }
          `}
        >
          Welcome to Paderborn.js – the JavaScript Meetup in Paderborn.
        </p>
      </ContentContainer>
    )
  }
}

export default Header
