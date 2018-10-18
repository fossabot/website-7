import React, { Component } from 'react'
import styled from 'react-emotion'

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export default class ContentContainer extends Component {
  public render() {
    return <Container>{this.props.children}</Container>
  }
}
