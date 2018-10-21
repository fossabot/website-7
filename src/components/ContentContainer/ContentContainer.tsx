import React, { Component } from 'react'
import { Inner, Outer } from './ContentContainer.style'

export interface IContentContainerProps {
  backgroundColor?: string
}

export default class ContentContainer extends Component<
  IContentContainerProps
> {
  public render() {
    return (
      <Outer backgroundColor={this.props.backgroundColor}>
        <Inner>{this.props.children}</Inner>
      </Outer>
    )
  }
}
