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

export const BallContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  animation: ${containerAnimation} 2s linear infinite;
`

export const Ball = styled.div<{ index: number }>`
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
