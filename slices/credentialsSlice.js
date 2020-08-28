import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFetch, postFetch } from "../pages/api/client";

export const getCredentials = createAsyncThunk(
  "credentials/get_credentials",
  async () => {
    const response = await getFetch(`/credentials`);
    return response;
  }
);

export const credentialByCode = createAsyncThunk(
  "credentials/credential_by_code",
  async (code) => {
    const response = await postFetch("/verifycode", code);
    return response;
  }
);

export const credentialsSlice = createSlice({
  name: "credentials",
  initialState: { credentials: null, error: null },
  reducers: {},
  extraReducers: {
    [getCredentials.fulfilled]: (state, action) => {
      state.credentials = action.payload.data;
    },
    [getCredentials.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default credentialsSlice.reducer;
