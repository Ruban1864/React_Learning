import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.jsx'
import Home from './home.jsx'
import Counter from './Counter.jsx'
import Post from './post.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './notFound.jsx'
import Comment from './Comments.jsx';  

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home />,
    errorElement: <NotFound />
  }, 
  {
    path :'/login',
    element :<Login />
  },
  {
    path :"/counter",
    element :<Counter />
  },
  {
    path :"/posts/:id", 
    element :<Post />
  },{
    path :"/comments",
    element :<Comment />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

//npm i react-router-dom