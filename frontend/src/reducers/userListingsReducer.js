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
      return action.payload.listings.filter(listing => listing.listedBy.id === user.id);
    }
  }
});

export const { initializeUserListingsAction, updateUserListingsAction, testAction } = userListingsSlice.actions;

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

export default userListingsSlice.reducer;