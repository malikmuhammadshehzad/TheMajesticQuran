import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
  singlePara: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const SingleParaData = createAsyncThunk('SingleParaData', async (paramData, thunkApi) => {
  try {

    const response = await api.get(`/quranarabic?para=${paramData}`);
    // console.log('main SingleParaData :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const SingleParaSlice = createSlice({
  name: 'SingleParaSlice',
  initialState: INITIAL_STATE,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(SingleParaData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(SingleParaData.fulfilled, (state, action) => {
      // console.log("🚀 ~ file: SingleParaData.js:35 ~ builder.addCase ~ action:", action.payload)

      state.singlePara = action.payload;
      state.isSuccess = true
      state.isLoading = false;
    });
    builder.addCase(SingleParaData.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isSuccess = false
      state.isError = true;
    });
  },
});

export default SingleParaSlice.reducer
