import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from '../pages/login/Login'
import LoginLayout from '../layouts/loginlayout/LoginLayout'
import MainLayout from '../layouts/main/MainLayout'
import SignUp from '../pages/signup/SignUp'
   

 export const router=createBrowserRouter([
        {
           element:<LoginLayout/>,
           errorElement:'',
           children:[
           {
            path:'/login',
            element:<Login/>
           },
           {
            path:'/sign',
            element:<SignUp/>
           }
           ]
        
        },
        {
          path:'/',
          element:<MainLayout/>,
          children:[
           { path:''

           }
          ]
        }
      ])
export default function AppRouter() {
  return  <RouterProvider router={router}/>

}
