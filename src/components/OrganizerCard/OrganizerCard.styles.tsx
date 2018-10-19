import styled from 'react-emotion'
import GlitchImage, { IGlitchImageProps } from '../GlitchImage/GlitchImage'

export const Card = styled.div`
  border: 0.5rem solid #f3f9fb;
  background: #e2eaec;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.5);
  height: 100%;
`

export const Description = styled.p`
  margin: 0;
  font-size: 1.6rem;
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
