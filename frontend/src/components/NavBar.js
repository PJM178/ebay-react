import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-element'><Link to='/'>Home</Link></div>
      <div className='nav-bar-element'><Link to='/listings'>Listings</Link></div>
      <div className='nav-bar-signin'>
        <div className='nav-bar-signin-element'><Link to='signin'>Sign in</Link></div>
        <div className='nav-bar-signin-element'><Link to='register'>Register</Link></div>
      </div>
    </div>
  )
}

export default NavBar
