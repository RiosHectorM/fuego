import { configureStore } from '@reduxjs/toolkit'
import matsReducer  from "../features/mats/matsSlice";

export const store = configureStore({
  reducer: {
  mats: matsReducer
}
})