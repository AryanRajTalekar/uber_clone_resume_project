import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import UserSignup from './pages/UserSignup.jsx'
import UserLogin from './pages/UserLogin.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
import Riding from './pages/Riding.jsx'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Start/>} />

      <Route path='/home' element={
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      } />

      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
      <Route path='/riding' element={<Riding/>} />

      <Route path='/user/logout' element={
        <UserProtectedWrapper>
        <UserLogout/>
      </UserProtectedWrapper>
      } />
      <Route path='/captain/logout' element={
        <CaptainProtectedWrapper>
          <CaptainLogout/>
        </CaptainProtectedWrapper>} />
      <Route path='/captain-home' element={
        <CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>} />
    </Routes> 
    </div>
  )
}

export default App