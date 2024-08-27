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

import { customerReducer } from './customer/customerThunk.js';
import { pharmacyReducer } from './pharmacy/pharmacySlice.js';
import { productReducer } from './product/productSlice.js';


const persistCustomerConfig = {
  key: 'customer',
  storage,
  whitelist: ['token'],
};
const persistPharmacyConfig = {
  key:'pharmacy',
};
const persistProductConfig ={
  key: 'product'
};

const persistedCustomer = persistReducer(persistCustomerConfig, customerReducer);
const persistedPharmacy = persistReducer(persistPharmacyConfig, pharmacyReducer);
const persistProduct = persistReducer(persistProductConfig, productReducer);

// const persistGlobalConfig = {
//   key: 'global',
//   storage,
//   whitelist: ['language', 'theme']
// };

//const persistedGlobal = persistReducer(persistGlobalConfig, globalReducer);

const store = configureStore({
  reducer: {
    user: persistedCustomer,
    pharmacy: persistedPharmacy,
    product: persistProduct,
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