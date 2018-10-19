import React, { Component } from 'react'
import styled from 'react-emotion'
import SubHeadline from '../SubHeadline/SubHeadline'

const CodeOfConductContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export default class CodeOfConduct extends Component {
  public render() {
    return (
      <CodeOfConductContainer>
        <SubHeadline>Code of Conduct</SubHeadline>
        <p>bla blubb coc fasel</p>
      </CodeOfConductContainer>
    )
  }
}
