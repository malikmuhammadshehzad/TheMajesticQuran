import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import UserApi from '../../api/useApi';
 
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
      const response = await UserApi.post('/Signin', paramData );
      console.log( 'api response:', response);
      return response.data;
    } catch (error) {  
      console.log(' api error:', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
export const SignupUser = createAsyncThunk(
  'SignupUser',
  async ( paramData , thunkApi) => {
    console.log( 'before api ' ,  paramData);
    try {
      const response = await UserApi.post('/Signup', paramData );
      console.log( 'api response:', response);
      return response.data;
    } catch (error) {  
      console.log('error axios:', error);
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
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => { 
      state.isLoading = false;
      state.isError = true;
    });
  
    builder.addCase(SignupUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(SignupUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(SignupUser.rejected, (state, action) => { 
      state.isLoading = false;
      state.isError = true;
    });
  },
  
});


export default AuthSlices.reducer

