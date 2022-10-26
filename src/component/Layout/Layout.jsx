import React from 'react'
import Router from '../../routes/Router'
import {Route,Routes} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
function Layout() {
  return (
    <div>
      <NavBar/>
      <Routes>
      {Router.routes.map((route, Index) => (
          <Route path={route.path} element={route.element} key={Index} />
        ))}
      </Routes>
 
    </div>
  )
}

export default Layout