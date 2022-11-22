import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'

import LoginForm from './components/LoginForm'
import WithNavBar from './components/WithNavBar'
import WithoutNavBar from './components/WithoutNavBar'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<WithoutNavBar />}>
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/register' element={<h2>Register</h2>} />
        </Route>
        <Route element={<WithNavBar />}>
          <Route path='/' element={<h1>BEGINNING OF THE PROJECT</h1>} />
          <Route path='/listings' element={<h2>Listings</h2>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App