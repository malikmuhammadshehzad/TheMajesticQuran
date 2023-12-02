import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ArabicAndEngReducer from './Reducers/ArabicAndEngReducer';
import SingleSurahReducer from './Reducers/SingleSurahReducer';
import QuranEngSingleSurahReducer from './Reducers/QuranEngSingleSurahReducer';
import QuranArabicReducer from './Reducers/QuranArabicReducer';
import SingleParaReducer from './Reducers/SingleParaReducer';
 

const reducers = combineReducers({
  ArabicAndEng: ArabicAndEngReducer,
  SurahReducer:SingleSurahReducer,
  QuranAndEng:QuranEngSingleSurahReducer,
  QuranArabic:QuranArabicReducer,
  SinglePara:SingleParaReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
