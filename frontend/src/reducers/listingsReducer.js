import { createSlice } from '@reduxjs/toolkit';
import listingService from '../services/listings';

const listingSlice = createSlice ({
  name: 'listings',
  initialState: [],
  reducers: {
    initializeListingsAction(state, action) {
      return action.payload;
    },
    newListingAction(state, action) {
      state.push(action.payload);
    }
  }
});

export const { initializeListingsAction, newListingAction } = listingSlice.actions;

export const initializeListings = () => {
  return async dispatch => {
    const listings = await listingService.getAll();
    console.log(listings);
    dispatch(initializeListingsAction(listings));
  };
};

export const newListing = (content) => {
  return async dispatch => {
    const newListing = await listingService.newListing(content);
    console.log(newListing);
    dispatch(newListingAction(newListing));
  };
};

export default listingSlice.reducer;