import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ArabicAndEngReducer from './Reducers/ArabicAndEngReducer';
import SingleSurahReducer from './Reducers/SingleSurahReducer';
import QuranEngSingleSurahReducer from './Reducers/QuranEngSingleSurahReducer';
 

const reducers = combineReducers({
  ArabicAndEng: ArabicAndEngReducer,
  SurahReducer:SingleSurahReducer,
  QuranAndEng:QuranEngSingleSurahReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
