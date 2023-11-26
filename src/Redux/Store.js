import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ArabicAndEngReducer from './Reducers/ArabicAndEngReducer';
import SingleSurahReducer from './Reducers/SingleSurahReducer';
 

const reducers = combineReducers({
  ArabicAndEng: ArabicAndEngReducer,
  SurahReducer:SingleSurahReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
