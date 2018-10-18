import React from 'react'
import Header from '../Header/Header'

const Layout: React.SFC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
