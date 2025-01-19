import {configureStore} from  "@reduxjs/toolkit";
import shoppersReducer from "./SopersSlice"
import {
  persistStore,
  persistReducer,
FLUSH,
REHYDRATE,
PERSIST,
PAUSE,
PURGE,
REGISTER,
WebStorage} from "redux-persist"
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined"

  //dummy server
  if (isServer) {
    return {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve()
    };

  }

  return createWebStorage("local");
};
 
const storage =typeof window !== "undefined"? createWebStorage("local") : createPersistStorage()

const persistConfig = {
    key: 'root',
    storage,
  }
 
  const persistedReducer = persistReducer(persistConfig, shoppersReducer)
export const Store = configureStore({
    reducer:{
          shoppers: persistedReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
          serializableCheck:{
            ignoredActions:[FLUSH , REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER]
          }
    })
})

export const persistor = persistStore(Store);