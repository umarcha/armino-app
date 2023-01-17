import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { users: [], loading: false, loader: false, edit: {}, token: "" },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      state.users?.map((user) => {
        if (user.id === action.payload.id) {
          user.values = action.payload.values;
        }
      });
    },
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setloader: (state, action) => {
      state.loader = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
});
export const { setUsers, setloading, setloader, updateUser, setToken } =
  userSlice.actions;
export default userSlice.reducer;
