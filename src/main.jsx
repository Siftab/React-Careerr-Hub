import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/jobs/Jobs.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Statistics from './Components/Stats/Statistics.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
  [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/jobs',
      element:<Jobs></Jobs>,
      loader:()=> fetch('/public/jobs.json')
    },
    {
      path:'/stats',
      element:<Statistics></Statistics>
    },
    {
      path:'/job/:id',
      element:<JobDetails></JobDetails>,
      loader: ()=>fetch('../public/jobs.json') 
    }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
