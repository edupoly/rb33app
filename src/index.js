import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Kajal from './Kajal';
import Enfild from './Enfild';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/kaju",
            element:<Kajal></Kajal>
        },
        {
            path:"/re",
            element:<Enfild></Enfild>
        },
        {
            path:'/countries',
            element:<Countries></Countries>
        },
        {
            path:"/countryDetails/:cname",
            element:<CountryDetails></CountryDetails>
        }
      ]
    },
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
