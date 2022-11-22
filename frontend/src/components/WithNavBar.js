import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const WithNavBar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default WithNavBar