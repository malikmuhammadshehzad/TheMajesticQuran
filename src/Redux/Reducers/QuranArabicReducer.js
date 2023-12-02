import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
   Para: [],
  isSuccess:false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const QuranArabicData = createAsyncThunk('QuranArabicData', async thunkApi => {
  try {
    const response = await api.get('/para');
    console.log(' Product response :', response.data);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const  QuranArabicSlice = createSlice({
  name: 'AllPara',
  initialState: INITIAL_STATE,
  reducers: {
  
  },
  extraReducers: builder => {
    builder.addCase(QuranArabicData.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(QuranArabicData.fulfilled, (state, action) => {
      // console.log("🚀 ~ file: QuranArabicData.js:35 ~ builder.addCase ~ action:", action.payload)
      
      state.Para = action.payload;
      state.isSuccess=true
      state.isLoading = false;
    });
    builder.addCase(QuranArabicData.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isSuccess=false
      state.isError = true;
    });
  },
});

export default QuranArabicSlice.reducer;
