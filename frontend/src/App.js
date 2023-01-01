import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from './reducers/userReducer';
import { initializeListings } from './reducers/listingsReducer';

// components
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WithNavBar from './components/WithNavBar';
import WithoutNavBar from './components/WithoutNavBar';
import HomePage from './components/HomePage';
import SingleListing from './components/SingeListing';
import AllListings from './components/AllListings';
import AllCategories from './components/AllCategories';
import ListingForm from './components/ListingForm';
import SubCategories from './components/SubCategories';
import MyPage from './components/MyPage';

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.user);
  const listings = useSelector(state => state.listings);
  console.log(loggedUser);
  console.log(listings);

  useEffect(() => {
    if (listings.length === 0) {
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
          <Route path='/listings' element={<AllListings />} />
          <Route path='/listings/:id' element={<SingleListing />} />
          <Route path='/categories' element={<AllCategories />} />
          <Route path='/sell' element={<ListingForm />} />
          <Route path='/categories/:id' element={<SubCategories />} />
          {loggedUser ? <Route path='/mypage' element={<MyPage />} /> : null}
        </Route>
      </Routes>
    </Router>
  );
};


export default App;