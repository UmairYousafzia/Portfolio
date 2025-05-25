import React from 'react'
import Header from './Header'
import Siderbar from './Siderbar'
const MainLayout = ({children}) => {
  return (
    <div div className="background">
        <Header />
        <Siderbar />
        
        <main>{children}</main>
    </div>
  )
}

export default MainLayout
