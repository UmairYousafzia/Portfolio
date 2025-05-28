import React from 'react'
import Header from './Header'
import Siderbar from './Siderbar'
import "./../../css/responsive.css";
const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <Siderbar />
        
        <main>{children}</main>
    </div>
  )
}

export default MainLayout
