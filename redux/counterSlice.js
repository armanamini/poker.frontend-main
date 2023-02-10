import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://vp.megaverse.today/api/v1/user/me", {
    method: "GET",
    headers: {
      Authorization: `identifier ${localStorage.getItem("identifier")}`,
    },
  });
  const data = await response.json();
  document.cookie = `verify=${data.verify}`;

  return data;
});

const initialState = {
  user: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "getUserData",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default counterSlice.reducer;
