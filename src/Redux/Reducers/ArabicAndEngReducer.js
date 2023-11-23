import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
  books: [],
  isSuccess:false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const ArabicAndEngData = createAsyncThunk('ArabicAndEngData', async thunkApi => {
  try {
    const response = await api.get('/books');
    console.log(' Product response :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const ArabicAndEngSlice = createSlice({
  name: 'AllBooks',
  initialState: INITIAL_STATE,
  reducers: {
    productRendering: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(ArabicAndEngData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(ArabicAndEngData.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isSuccess=true
      state.isLoading = false;
    });
    builder.addCase(ArabicAndEngData.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isSuccess=false
      state.isError = true;
    });
  },
});

export default ArabicAndEngSlice.reducer;
