import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api';
 

const INITIAL_STATE = {
  userData: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
 
};

export const loginUser = createAsyncThunk(
  'loginUser',
  async ( paramData , thunkApi) => {
    console.log(paramData);
    try {
      const response = await api.post('/auth/login', paramData );
      console.log( 'api response:', response);
      return response.data;
    } catch (error) {  
      console.log('error:', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
const AuthSlices = createSlice({
 
  name: 'AuthReducer',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      (isLoading = false), 
      (isSuccess = true);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export default AuthSlices.reducer

