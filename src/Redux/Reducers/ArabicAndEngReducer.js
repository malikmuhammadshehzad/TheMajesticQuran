import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
   surah: [],
  isSuccess:false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const ArabicAndEngData = createAsyncThunk('ArabicAndEngData', async thunkApi => {
  try {
    const response = await api.get('/surah');
    // console.log(' Product response :', response.data.message);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const ArabicAndEngSlice = createSlice({
  name: 'AllSurah',
  initialState: INITIAL_STATE,
  reducers: {
  
  },
  extraReducers: builder => {
    builder.addCase(ArabicAndEngData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(ArabicAndEngData.fulfilled, (state, action) => {
      // console.log("🚀 ~ file: ArabicAndEngReducer.js:35 ~ builder.addCase ~ action:", action.payload)
      
      state.surah = action.payload;
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
