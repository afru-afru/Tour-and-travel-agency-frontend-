import React from 'react'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import {Routers} from '../../router/Routers'


export  function Layout () {
  return (
    <>
   <Header/>
   <Routers/>
   <Footer/>
    </>
  )
}

// export default Layout
