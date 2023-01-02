import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import listingReducer from './reducers/listingsReducer';
import userListingsReducer from './reducers/userListingsReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    listings: listingReducer,
    userListings: userListingsReducer
  }
});

export default store;