import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import Home from '../Components/Pages/Home';
import Apps from '../Components/Pages/Apps';
import Installation from '../Components/Pages/Installation';
import AppDetails from '../Components/Pages/AppDetails';
import ErrorPage from '../Components/ErrorPage';
import Apperror from '../Components/Apperror';

export const router=createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                loader:()=>fetch('/app.json'),
                Component: Home
            },
            {
                path:'/apps',
                  loader:()=>fetch('/app.json'),
                  Component: Apps

            },
            {
                path:'/installation',
               loader:()=>fetch('/app.json'),
                Component: Installation
            },
            {
                path:'/appDetails/:id',
                errorElement:<Apperror></Apperror>,
                 loader:()=>fetch('/app.json'),
                 Component: AppDetails

            }
        ]
    }
])