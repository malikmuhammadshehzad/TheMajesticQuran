import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
  singleSurah: [],
  isSuccess:false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const  QuranEngSingleSurahData = createAsyncThunk('QuranEngSingleSurahData', async  (paramData ,thunkApi) => {
  try {
    const response = await api.get(`/quranenglish?surah=${paramData}`);
    // console.log('main QuranEngSingleSurahData :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const  QuranEngSingleSlice = createSlice({
  name: 'QuranEngSingleSurah',
  initialState: INITIAL_STATE,
  reducers: {
  
  },
  extraReducers: builder => {
    builder.addCase(QuranEngSingleSurahData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(QuranEngSingleSurahData.fulfilled, (state, action) => {
      // console.log("🚀 ~ file: QuranEngSingleSurahData.js:35 ~ builder.addCase ~ action:", action.payload)
      
      state.singleSurah = action.payload;
      state.isSuccess=true
      state.isLoading = false;
    });
    builder.addCase(QuranEngSingleSurahData.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isSuccess=false
      state.isError = true;
    });
  },
});

export default QuranEngSingleSlice.reducer
