import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ArabicAndEngReducer from './Reducers/ArabicAndEngReducer';
import SingleSurahReducer from './Reducers/SingleSurahReducer';
import QuranEngSingleSurahReducer from './Reducers/QuranEngSingleSurahReducer';
import QuranArabicReducer from './Reducers/QuranArabicReducer';
import SingleParaReducer from './Reducers/SingleParaReducer';
import PodcastReducer from './Reducers/PodcastReducer';
import AuthReducer from './Reducers/AuthReducer';
import storage from '@react-native-async-storage/async-storage';
import{persistReducer , persistStore}  from 'redux-persist';
import PlayerReducer from './Reducers/PlayerReducer';
 const persistConfig={
key :'root',
storage
 }
const reducers = combineReducers({
  ArabicAndEng: ArabicAndEngReducer,
  SurahReducer:SingleSurahReducer,
  QuranAndEng:QuranEngSingleSurahReducer,
  QuranArabic:QuranArabicReducer,
  SinglePara:SingleParaReducer,
  PodCast:PodcastReducer,
  // Auth: AuthReducer,
  Player:PlayerReducer,
  Auth: persistReducer( persistConfig , AuthReducer  ) ,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persister = persistStore(store)

