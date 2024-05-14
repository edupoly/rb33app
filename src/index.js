import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Todolist from './Todolist';
import Counter from './Counter';
import Products from './Products';
import Countries from './Countries';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/todolist",
            element:<Todolist></Todolist>
        },
        {
            path:"/counter",
            element:<Counter></Counter>
        },
        {
            path:"/products",
            element:<Products></Products>
        },
        {
            path:"/countries",
            element:<Countries></Countries>
        }
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
