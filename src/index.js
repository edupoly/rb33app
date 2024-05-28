import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Todolist from './features/todolist/Todolist';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import Posts from './features/posts/Posts';
import AddPost from './features/posts/AddPost';
import EditPost from './features/posts/EditPost';
import CRMDashboard from './features/crm/CRMDashboard';
import Home from './features/shared/Home';
import CRMHome from './features/crm/CRMHome';
import AddContactForm from './features/crm/AddContactForm';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
            path: "/todolist",
            element: <Todolist></Todolist>,
        },
        {
            path: "/counter",
            element: <Counter></Counter>
        },
        {
            path: "/countries",
            element: <Countries></Countries>
        },
        {
            path: "/posts",
            element: <Posts></Posts>
        },
        {
            path: "/addpost",
            element: <AddPost></AddPost>
        },
        {
            path: "/editpost",
            element: <EditPost></EditPost>
        },
        {
          path:'/crm',
          element:<CRMDashboard></CRMDashboard>,
          children:[
            {
              path:"/crm",
              element:<CRMHome></CRMHome>
            },
            {
              path:"/crm/addContact",
              element:<AddContactForm></AddContactForm>
            }
          ]
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
