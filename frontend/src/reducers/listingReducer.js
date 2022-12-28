import { createSlice } from '@reduxjs/toolkit';
import listingService from '../services/listings';

const listingSlice = createSlice ({
  name: 'listing',
  initialState: null,
  reducers: {
    initializeListingsAction(state, action) {
      return action.payload;
    }
  }
});

export const { initializeListingsAction } = listingSlice.actions;

export const initializeListings = () => {
  return async dispatch => {
    const listings = await listingService.getAll();
    console.log(listings);
    dispatch(initializeListingsAction(listings));
  };
};

export default listingSlice.reducer;