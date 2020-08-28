import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  postFetch,
  getFetch,
  postFetchWithHeaders,
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

export const userByDNI = createAsyncThunk("/verifydni", async (dni) => {
  const response = await postFetch("/verifydni", dni);
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
    },
    [getUser.rejected]: (state, action) => {
      console.error(action.error.message);
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
