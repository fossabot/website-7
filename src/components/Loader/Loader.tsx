import React from 'react'
import styled, { keyframes } from 'react-emotion'

const ballAnimations = [
  keyframes`
    33% { transform: translate(25px, -50px); }
    66% { transform: translate(50px, 0px); }
    100% { transform: translate(0px, 0px); }`,
  keyframes`
    33% { transform: translate(25px, 50px); }
    66% { transform: translate(-25px, 50px); }
    100% { transform: translate(0px, 0px); }`,
  keyframes`
    33% { transform: translate(-50px, 0px); }
    66% { transform: translate(-25px, -50px); }
    100% { transform: translate(0px, 0px); }`,
]

const containerAnimation = keyframes`
  from { transform: scale(.5) rotate(0deg); }
  to { transform: scale(.5) rotate(360deg); }
`

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`

const LoaderText = styled.span`
  color: #558290;
  font-weight: 400;
  margin-top: 0.5rem;
`

const BallContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  animation: ${containerAnimation} 2s linear infinite;
`

const Ball = styled.div<{ index: number }>`
  animation: ${props => ballAnimations[props.index]} 2.2s ease 0s infinite;
  animation-fill-mode: both;
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #558290;
  top: ${props => (props.index === 1 ? 0 : 50)}px;
  left: ${props => props.index * 25}px;
`

interface ILoaderProps {
  defer?: number
  text?: string
}

interface ILoaderState {
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
    return this.state.display ? (
      <LoaderContainer>
        <BallContainer>
          <Ball index={0} />
          <Ball index={1} />
          <Ball index={2} />
        </BallContainer>
        {this.props.text && <LoaderText>{this.props.text}</LoaderText>}
      </LoaderContainer>
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
