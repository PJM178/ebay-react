import { createSlice } from '@reduxjs/toolkit';

const userListingsSlice = createSlice ({
  name: 'userListings',
  initialState: [],
  reducers: {
    initializeUserListingsAction(state, action) {
      return action.payload;
    },
    updateUserListingsAction(state, action) {
      state.push(action.payload);
    },
    testAction(state, action) {
      const user = action.payload.user;
      const listings = action.payload.listings;
      return listings.filter(listing => listing.listedBy.id === user.id);
    },
    clearUserListingsAction() {
      return [];
    }
  }
});

export const { initializeUserListingsAction, updateUserListingsAction, testAction, clearUserListingsAction } = userListingsSlice.actions;

export const initializeUserListings = (filteredListings) => {
  return async dispatch => {
    dispatch(initializeUserListingsAction(filteredListings));
  };
};

export const test = (listings, user) => {
  return async dispatch => {
    dispatch(testAction({ listings, user }));
  };
};

export const clearUserListings = () => {
  return async dispatch => {
    dispatch(clearUserListingsAction());
  };
};

export default userListingsSlice.reducer;