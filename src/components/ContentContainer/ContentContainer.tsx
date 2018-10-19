import React, { Component } from 'react'
import { ContentContainerDiv } from './ContentContainer.style'

export default class ContentContainer extends Component {
  public render() {
    return <ContentContainerDiv>{this.props.children}</ContentContainerDiv>
  }
}
