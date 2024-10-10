import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFiles = createAsyncThunk('files/data', async (fileName = '') => {
  const response = await fetch(`http://localhost:4250/api/files/data${fileName ? '?fileName=' + fileName : ''}`, {
    method: 'GET',
  });

  const data = await response.json();
  console.log(data);
  return data;
});

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    status: 'succeeded',
    rows: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFiles.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rows = action.payload.files;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      });
  },
});

export default filesSlice.reducer;
