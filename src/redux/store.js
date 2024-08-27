import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { customerReducer } from './customer/customerSlice.js';


const persistUserConfig = {
  key: 'customer',
  storage,
  whitelist: ['token'],
};

const persistedCustomer = persistReducer(persistUserConfig, customerReducer);

// const persistGlobalConfig = {
//   key: 'global',
//   storage,
//   whitelist: ['language', 'theme']
// };

//const persistedGlobal = persistReducer(persistGlobalConfig, globalReducer);

const store = configureStore({
  reducer: {
    user: persistedCustomer,
    // water: waterReducer,
    // global: persistedGlobal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export default store;