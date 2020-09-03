import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  postFetch,
  getFetch,
  postFetchWithHeaders,
  patchFetch,
} from "./../pages/api/client";
import { setCookieTokenObject } from "../helpers/cookies.helpers";

export const signIn = createAsyncThunk("auth/sign_in", async (body) => {
  const response = await postFetchWithHeaders("/auth/sign_in", body);
  return response;
});

export const sign_up = createAsyncThunk("auth", async (body) => {
  const response = await postFetchWithHeaders("/auth", body);
  return response;
});

export const getUser = createAsyncThunk("auth/get_user", async () => {
  const response = await getFetch("/auth/validate_token");
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    addImage: (state, action) => {
      state.user.image = action.payload;
    },
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      setCookieTokenObject(action.payload.headers);
    },
    [signIn.rejected]: (state, action) => {
      console.error(action.error.message);
    },
    [sign_up.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      setCookieTokenObject(action.payload.headers);
    },
    [sign_up.rejected]: (state, action) => {
      console.error(action.error);
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.user.image = null;
    },
    [getUser.rejected]: (state, action) => {
      console.error(action.error.message);
    },
  },
});

export const { logout, updateUser, addImage } = authSlice.actions;

export default authSlice.reducer;
