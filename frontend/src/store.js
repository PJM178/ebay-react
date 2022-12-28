import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import listingReducer from './reducers/listingReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    listing: listingReducer
  }
});

export default store;