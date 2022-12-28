import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from './reducers/userReducer';
import { initializeListings } from './reducers/listingReducer';

// components
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WithNavBar from './components/WithNavBar';
import WithoutNavBar from './components/WithoutNavBar';
import HomePage from './components/HomePage';

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.user);
  const listings = useSelector(state => state.listing);
  console.log(loggedUser);
  console.log(listings);

  useEffect(() => {
    if (!listings) {
      dispatch(initializeListings());
    }
    const userStorageInfo = window.localStorage.getItem('loggedEbayUser');
    if (userStorageInfo) {
      const user = JSON.parse(userStorageInfo);
      dispatch(setUser(user));
    }
  }, [dispatch]);

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
          <Route path='/' element={<HomePage />} />
          <Route path='/listings' element={<h2>Listings</h2>} />
        </Route>
      </Routes>
    </Router>
  );
};


export default App;