import styled, { keyframes } from 'react-emotion'

const offsetHorizontal = 4
const offsetVertical = 2

const glitchAnimText = keyframes`
	40% {
		transform: translate3d(calc(-1 * ${offsetHorizontal}),0,0) scale3d(-1,-1,1);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
	42% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
	44% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
	45% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
	46% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
	47% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
	49% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
	48% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
	49.9% { transform: translate3d(calc(-1 * ${offsetHorizontal}),0,0) scale3d(-1,-1,1); }
	50%, 100% {
		transform: translate3d(0,0,0) scale3d(1,1,1);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }`

const glitchAnimation1 = keyframes`
	0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
	2% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
	4% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
	6% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
	8% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
	10% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
	12% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
	14% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
	16% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
	18% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
	20% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
	22%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }`

const glitchAnimation2 = keyframes`
	0% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
	3% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
	5% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
	7% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
	9% { clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
	11% { clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
	13% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
	15% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
	17% { clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
	19% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
	20% { clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
	22%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }`

const glitchAmimation3 = keyframes`
	0% { clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%); }
	1.5% { clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%); }
	2% { clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); }
	2.5% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
	3% { clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%); }
	5% { clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%); }
	5.5% { clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
	7% { clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%); }
	8% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
	9% { clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%); }
	10.5% { clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%); }
	11% { clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%); }
	13% { clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%); }
	14% { clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%); }
	14.5% { clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%); }
	15% { clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%); }
	16% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
	18% { clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%); }
	20% { clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%); }
	22%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }`

const flashAnimation = keyframes`
  0% {
		opacity: 0.1;
		transform: translate3d(${offsetHorizontal}px, ${offsetVertical}px, 0);
	}
	33%, 100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
	}`

const exclusionAnimation = keyframes`
	0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
	3% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
	17% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
	20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
	26% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
	32% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
	50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
	55% { clip-path: polygon(0 92%, 100% 92%, 100% 94%, 0 94%); }
	60% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
	80% {	clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
	90% {	clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
	100% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }`

export const Image = styled.div<{ src: string }>`
  width: calc(100% + 2 * ${offsetHorizontal}px);
  height: calc(100% + 2 * ${offsetVertical}px);
  background-image: linear-gradient(
      to bottom,
      rgba(233, 242, 245, 0.2) 0%,
      rgba(66, 119, 115, 0.2) 70%,
      rgba(0, 0, 0, 1) 83%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${props => props.src});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: -${offsetVertical}px;
  left: -${offsetHorizontal}px;
  background-blend-mode: soft-light;
  opacity: 0;

  &:nth-child(1) {
    opacity: 1;
  }

  &:nth-child(2) {
    background-blend-mode: color;
  }

  &:nth-child(3) {
    background-color: rgba(255, 255, 255, 1);
    background-blend-mode: exclusion;
  }

  &:nth-child(6) {
    background-color: LightCyan;
    background-blend-mode: overlay;
  }
`

export const Text = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-size: 2.6rem;
`

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin: 0 auto;

  &:hover ${Text} {
    animation: ${glitchAnimText} 2s linear infinite;
  }
  &:hover ${Image} {
    opacity: 1;
  }
  &:hover ${Image}:nth-child(2) {
    left: 2px;
    animation: ${glitchAnimation1} 2s infinite linear alternate-reverse;
  }
  &:hover ${Image}:nth-child(3) {
    left: 2px;
    opacity: 0.3;
    animation: ${exclusionAnimation} 4s infinite linear alternate-reverse;
  }
  &:hover ${Image}:nth-child(4) {
    left: -2px;
    animation: ${glitchAnimation2} 3s infinite linear alternate-reverse;
  }
  &:hover ${Image}:nth-child(5) {
    left: -2px;
    animation: ${glitchAmimation3} 3s infinite linear alternate-reverse;
  }
  &:hover ${Image}:nth-child(6) {
    animation: ${flashAnimation} 0.5s steps(1, end) infinite;
  }
`

export const FilterSVG = styled.svg`
  height: 0;
`
