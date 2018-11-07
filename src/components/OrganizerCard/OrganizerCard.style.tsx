import styled from 'react-emotion'
import GlitchImage, { IGlitchImageProps } from '../GlitchImage/GlitchImage'
import { ReactComponent } from './twitter.svg'

export const Card = styled.div`
  padding: 0.3rem;
  background: #fff;
  height: 100%;
`

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1.6rem;
  line-height: 1.25;

  @media (min-width: 550px) and (max-width: 767px) {
    font-size: 2.2rem;
  }
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  padding: 0 1rem 1.4rem 1rem;
`

export const ProfileImage = styled(GlitchImage)<IGlitchImageProps>`
  width: 100%;
  height: 26rem;
`

export const LinkWrapper = styled.div`
  margin: 0.5rem 0 1rem 0;
`

export const TwitterLogo = styled(ReactComponent)`
  fill: #1da1f2;
  height: 1.4rem;
  margin-right: 0.3rem;
`
