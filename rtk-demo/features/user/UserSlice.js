import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk as createAsybThunk } from "@reduxjs/toolkit";

import { get } from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsybThunk("users/fetchUsers", () => {
  return get("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.data.map((user) => user.id)
  );
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      (state.users = []), (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
