import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import Home from '../Components/Pages/Home';
import Apps from '../Components/Pages/Apps';

export const router=createBrowserRouter([
    {
        path:'/',
        Component: Root,
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

            }
        ]
    }
])