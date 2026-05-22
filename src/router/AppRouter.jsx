import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from '../pages/login/Login'
import LoginLayout from '../layouts/loginlayout/LoginLayout'
import MainLayout from '../layouts/main/MainLayout'
import SignUp from '../pages/signup/SignUp'
import Dashboard from '../pages/dashboard/Dashboard'
import Transaction from '../pages/transactoion/Transaction'
import Categories from '../pages/categories/Categories'
import Statistics from '../pages/statistics/Statistics'
import Profile from '../pages/profile/Profile'
   

 export const router=createBrowserRouter([
        {
          path:'/',
           element:<LoginLayout/>,
           errorElement: <h1>Error</h1>,
           children:[
           {
            index:true,
            element:<Login/>
           },
           {
            path:'/sign',
            element:<SignUp/>
           }
           ]
        
        },
        {
          path:'/main',
          element:<MainLayout/>,
          children:[
           {
             path:'dashboard', 
            element:<Dashboard/>

           },
           {
             path:'transactions',
            element:<Transaction/>

           },
           {
             path:'categories',
            element:<Categories/>

           },
           {
             path:'statistics',
            element:<Statistics/>

           },
           {
             path:'profile',
            element:<Profile/>

           },
          ]
        }
      ])
export default function AppRouter() {
  return  <RouterProvider router={router}/>

}
