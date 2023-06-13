import { createAction, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  authState: false,
};

const setAuthState = createAction("auth/setState", (authState) => ({
  payload: {
    authState,
  },
}));

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(setAuthState, (state, { payload }) => {
      state.authState = payload.authState;
    });
  },
});

export default authSlice.reducer;
