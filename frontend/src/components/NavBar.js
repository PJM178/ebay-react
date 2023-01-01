import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../reducers/userReducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.user);

  const logout = async () => {
    dispatch(logoutUser());
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-element"><Link to='/'>Home</Link></div>
      <div className="nav-bar-element"><Link to='/listings'>Listings</Link></div>
      <div className="nav-bar-element"><Link to='/categories'>Categories</Link></div>
      {loggedUser
        ? <div className="nav-bar-signin">
          <div className="nav-bar-signin-element"><Link to='mypage'>My Page</Link></div>
          <div className="nav-bar-signin-element"><Link to='sell'>Sell</Link></div>
          <a className="nav-bar-signin-element" href='#' onClick={() => logout()}>Logout</a>
        </div>
        : <div className="nav-bar-signin">
          <div className="nav-bar-signin-element"><Link to='signin'>Sign in</Link></div>
          <div className="nav-bar-signin-element"><Link to='register'>Register</Link></div>
        </div>}
    </div>
  );
};

export default NavBar;
