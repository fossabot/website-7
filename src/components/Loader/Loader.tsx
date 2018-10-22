import React from 'react'
import { Ball, BallContainer } from './Loader.style'

export interface ILoaderProps {
  defer?: number
}

export interface ILoaderState {
  display: boolean
}

export default class Loader extends React.Component<
  ILoaderProps,
  ILoaderState
> {
  public state = {
    display: false,
  }

  private timer: number | undefined

  public render() {
    return this.props.defer === 0 || this.state.display ? (
      <BallContainer>
        <Ball index={0} />
        <Ball index={1} />
        <Ball index={2} />
      </BallContainer>
    ) : null
  }

  public componentDidMount() {
    this.timer = window.setTimeout(
      () => this.setState({ display: true }),
      this.props.defer || 500
    )
  }

  public componentWillUnmount() {
    window.clearTimeout(this.timer)
  }
}
