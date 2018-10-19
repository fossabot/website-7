import styled from 'react-emotion'

export const ContentContainerDiv = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 550px) and (max-width: 799px) {
    padding: 0 2rem;
  }
  @media (min-width: 800px) {
    padding: 0 3rem;
  }
`
