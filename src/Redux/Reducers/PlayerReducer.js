import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
    player: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: null,
};

export const PlayerData = createAsyncThunk('PlayerData', async  (paramData, thunkApi) => {

    try {
        const response = await api.get(`/quranaudio?surah=${paramData}`);
        console.log(' Product response :', response);
        return response.data;
    } catch (error) {
        console.log(" podcast error ", error);
        return thunkApi.rejectWithValue(error)
    }
});

const PlayerSlice = createSlice({
    name: 'Player',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(PlayerData.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(PlayerData.fulfilled, (state, action) => {
            console.log("🚀 ~ file: ArabicAndEngReducer.js:35 ~ builder.addCase ~ action:", action.payload)

            state.player = action.payload;
            state.isSuccess = true
            state.isLoading = false;
        });
        builder.addCase(PlayerData.rejected, (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
            state.isSuccess = false
            state.isError = true;
        });
    },
});

export default PlayerSlice.reducer;
