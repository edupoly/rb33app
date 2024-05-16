import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todolistSlice'
import countriesReducer from '../features/countries/CountriesSlice';
import { countriesApi } from '../service/countriesApi';
import { productsApi } from '../service/productsApi';

export const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
    countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})