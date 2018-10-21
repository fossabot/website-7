import styled from 'react-emotion'
import GlitchImage, { IGlitchImageProps } from '../GlitchImage/GlitchImage'

export const Card = styled.div`
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.5);
  height: 100%;
`

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1.6rem;
  line-height: 1.25;

  @media (min-width: 550px) and (max-width: 799px) {
    font-size: 2.2rem;
  }
  @media (min-width: 800px) {
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
