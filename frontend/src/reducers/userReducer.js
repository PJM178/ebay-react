import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import listingService from '../services/listings'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    loginUserAction(state, action) {
      return action.payload
    },
    setUserAction(state, action) {
      return action.payload
    }
  }
})

export const { loginUserAction, setUserAction } = userSlice.actions

export const loginUser = (content) => {
  return async dispatch => {
    const { username, password } = content
    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedEbayUser', JSON.stringify(user))
      listingService.setToken(user.token)
      dispatch(loginUserAction(user))
    } catch(exception) {
      console.log(exception)
    }
  }
}

export const setUser = (content) => {
  return async dispatch => {
    dispatch(setUserAction(content))
  }
}

export default userSlice.reducer