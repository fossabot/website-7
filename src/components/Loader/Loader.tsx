import React from 'react'
import styled, { keyframes } from 'react-emotion'

const ballAnimations = [
  keyframes`
    33% { transform: translate(18px, -36px); }
    66% { transform: translate(36px, 0px); }
    100% { transform: translate(0px, 0px); }`,
  keyframes`
    33% { transform: translate(18px, 36px); }
    66% { transform: translate(-18px, 36px); }
    100% { transform: translate(0px, 0px); }`,
  keyframes`
    33% { transform: translate(-36px, 0px); }
    66% { transform: translate(-18px, -36px); }
    100% { transform: translate(0px, 0px); }`,
]

const containerAnimation = keyframes`
  from { transform: scale(.8) rotate(0deg); }
  to { transform: scale(.8) rotate(360deg); }
`

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LoaderText = styled.span`
  font-weight: 300;
  margin-top: 1.25rem;
  font-size: 1.8rem;
  text-transform: uppercase;

  @media (min-width: 550px) and (max-width: 799px) {
    font-size: 1.9rem;
  }
  @media (min-width: 800px) {
    font-size: 2rem;
  }
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid #175377;
  top: ${props => (props.index === 1 ? 0 : 36)}px;
  left: ${props => props.index * 18}px;
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
    return this.props.defer === 0 || this.state.display ? (
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
