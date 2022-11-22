import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import WithNavBar from './components/WithNavBar'
import WithoutNavBar from './components/WithoutNavBar'

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Don't show navigation header */}
        <Route element={<WithoutNavBar />}>
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Route>
        {/* Show navigation header */}
        <Route element={<WithNavBar />}>
          <Route path='/' element={<h1>BEGINNING OF THE PROJECT</h1>} />
          <Route path='/listings' element={<h2>Listings</h2>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App