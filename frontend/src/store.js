import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import listingReducer from './reducers/listingsReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    listings: listingReducer
  }
});

export default store;