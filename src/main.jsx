import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <Toaster/>
   <div className='max-w-[1380px] mx-auto'>
   <RouterProvider router={Routers}/>
   </div>
   </QueryClientProvider>
  </React.StrictMode>,
)
