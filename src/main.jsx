import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/Home/About/About.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
const routers = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/User',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/userDetails/:UserId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
