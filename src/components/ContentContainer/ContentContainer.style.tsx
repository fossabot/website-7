import styled from 'react-emotion'
import { IContentContainerProps } from './ContentContainer'

export const Inner = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 550px) and (max-width: 799px) {
    padding: 0 4rem;
  }
  @media (min-width: 800px) {
    padding: 0 5rem;
  }
`

export const Outer = styled.section<IContentContainerProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`
