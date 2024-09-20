import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "../features/crud/crudSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})