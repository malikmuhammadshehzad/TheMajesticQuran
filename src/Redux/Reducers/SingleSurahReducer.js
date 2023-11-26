import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
  singleSurah: [],
  isSuccess:false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const  SingleSurahData = createAsyncThunk('SingleSurahData', async  (paramData ,thunkApi) => {
  try {
    const response = await api.get(`/arabicandenglish?surah=${paramData}`);
    // console.log('Single Surah :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const  SingleSurahSlice = createSlice({
  name: 'SingleSurah',
  initialState: INITIAL_STATE,
  reducers: {
  
  },
  extraReducers: builder => {
    builder.addCase(SingleSurahData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(SingleSurahData.fulfilled, (state, action) => {
      // console.log("🚀 ~ file: ArabicAndEngReducer.js:35 ~ builder.addCase ~ action:", action.payload)
      
      state.singleSurah = action.payload;
      state.isSuccess=true
      state.isLoading = false;
    });
    builder.addCase(SingleSurahData.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isSuccess=false
      state.isError = true;
    });
  },
});

export default SingleSurahSlice.reducer;
