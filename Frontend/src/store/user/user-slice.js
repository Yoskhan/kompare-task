import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {
    replaceUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
