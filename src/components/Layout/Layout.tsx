import React from 'react'
import styled from 'react-emotion'
import Header from '../Header/Header'

const LayoutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Layout: React.SFC = ({ children }) => (
  <LayoutContainer>
    <Header />
    <main>{children}</main>
  </LayoutContainer>
)

export default Layout
