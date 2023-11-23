import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ArabicAndEngReducer from './Reducers/ArabicAndEngReducer';
 

const reducers = combineReducers({
  ArabicAndEng: ArabicAndEngReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
