import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const INITIAL_STATE = {
    podcast: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: null,
};

export const PodcastData = createAsyncThunk('PodcastData', async thunkApi => {

    try {
        const response = await api.get('/Showpodcast');

        console.log(' Product response :', response);
        return response.data;
    } catch (error) {
        console.log("error ", error);
        return thunkApi.rejectWithValue(error)
    }
});

const PodcastSlice = createSlice({
    name: 'Podcast',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(PodcastData.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(PodcastData.fulfilled, (state, action) => {
            console.log("🚀 ~ file: ArabicAndEngReducer.js:35 ~ builder.addCase ~ action:", action.payload)

            state.podcast = action.payload;
            state.isSuccess = true
            state.isLoading = false;
        });
        builder.addCase(PodcastData.rejected, (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
            state.isSuccess = false
            state.isError = true;
        });
    },
});

export default PodcastSlice.reducer;
