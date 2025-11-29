import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { todosSlice } from './../features/todos/todosSlice';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todosSlice.reducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    
  },
});

// RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create and export the persistor so the app can wait for rehydration
export const persistor = persistStore(store);
