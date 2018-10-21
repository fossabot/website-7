import styled from 'react-emotion'

export const Link = styled.a`
  color: #4078c0;
  font-weight: 400;
  text-decoration: none;
  margin: 0 0 1rem 0;
  font-size: 1.7rem;

  @media (min-width: 550px) and (max-width: 799px) {
    font-size: 1.9rem;
  }
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`
