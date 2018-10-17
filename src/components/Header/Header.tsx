import React, { Component } from 'react'
import styled from 'react-emotion'
import { ReactComponent as JavaScriptLogo } from './javascript.svg'

const Logo = styled(JavaScriptLogo)`
  width: 100px;
  margin-left: 1em;
`

const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  color: #12223c;
`

const Headline = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
`

class Header extends Component {
  public render() {
    return (
      <>
        <LogoContainer>
          <Headline>Paderborn</Headline>
          <Logo />
        </LogoContainer>
        <p
          css={`
            text-align: center;
          `}
        >
          Website coming soon!
        </p>
      </>
    )
  }
}

export default Header
