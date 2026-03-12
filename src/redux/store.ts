import { combineReducers, configureStore } from "@reduxjs/toolkit";
import EncryptedStorage from "react-native-encrypted-storage";
import { persistReducer } from "redux-persist";
import { persistStore } from 'redux-persist';
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";

const EncryptedStorageAdapter = {
    setItem: async (key: string, value: string) => {
        await EncryptedStorage.setItem(key, value);
    },
    getItem: async (key: string) => {
        return await EncryptedStorage.getItem(key);
    },
    removeItem: async (key: string) => {
        await EncryptedStorage.removeItem(key);
    },
};

const reducers = combineReducers({
    theme: themeSlice,
    auth: authSlice
})

const persistConfig = {
    key: 'root',
    storage: EncryptedStorageAdapter,
    whitelist: ['theme', 'auth']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;