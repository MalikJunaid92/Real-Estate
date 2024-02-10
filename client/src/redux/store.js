import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // Change the import statement

export const store = configureStore({
  reducer: { user: userReducer }, // Use userReducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
