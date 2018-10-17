import React from 'react'
import styled from 'react-emotion'

const H2 = styled.h2`
  margin: 5rem 0 2rem 0;
  color: #12223c;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 5rem 0.5rem 5rem;
  border-bottom: 2px solid #82bfb7;
  display: inline-block;
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
