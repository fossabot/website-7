import React from 'react'
import styled from 'react-emotion'

const H2 = styled.h2`
  margin: 0 0 2.4rem 0;
  color: #12223c;
  text-align: center;
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 3rem;
  border-bottom: 2px solid #82bfb7;
  display: inline-block;
  font-family: Raleway;

  @media (min-width: 550px) and (max-width: 799px) {
    margin: 0 0 2.7rem 0;
    font-size: 2.7rem;
    padding: 0 4rem;
  }
  @media (min-width: 800px) {
    margin: 0 0 3rem 0;
    font-size: 3rem;
    padding: 0 5rem;
  }
`

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SubHeadline: React.SFC = ({ children }) => (
  <HeadlineContainer>
    <H2>{children}</H2>
  </HeadlineContainer>
)

export default SubHeadline
