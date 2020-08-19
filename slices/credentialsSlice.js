import {createSlice} from '@reduxjs/toolkit';

const initialState = [1, 2, 3];

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState: initialState,
  reducers: {},

});

// export const {} = credentialsSlice.actions;

export default credentialsSlice.reducer;