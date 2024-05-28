import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todolistSlice'
import countriesReducer from '../features/countries/CountriesSlice';
import { countriesApi } from '../service/countriesApi';
import { productsApi } from '../service/productsApi';
import { postsApi } from '../service/postsAPI';
import { coursesApi } from '../service/coursesApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from '../service/contactsApi';

export const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
    countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
    [coursesApi.reducerPath]:coursesApi.reducer,
    [contactsApi.reducerPath]:contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware,coursesApi.middleware,contactsApi.middleware),
})
setupListeners(store.dispatch)