import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['desiredReducer'], 
  };
  

  const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store)