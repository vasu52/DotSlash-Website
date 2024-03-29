import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage, SignUp, Home, CreateBlog, BlogMainPage, Chat } from './components/index.js'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Rating from './components/Rating/Rating.jsx'
import SingleBlog from './components/Blogs/SingleBlog.jsx'
import UserPage from './components/User/UserPage.jsx'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home pageText='Home' />} />
      <Route path='announcements' element={<Home pageText='Announcements' />} />
      <Route path='resources' element={<Home pageText='Resoruces' />} />
      <Route path='mentors' element={<Home pageText='Mentors' />} />
      <Route path='ratings' element={<Rating />} />
      <Route path='discussions' element={<Chat pageText='Discussions' />} />
      <Route path='blogs' element={<BlogMainPage pageText='Blogs' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='blogs/create-blog' element={<CreateBlog />} />
      <Route path='blog/:blogId' element={<SingleBlog />} />
      <Route path='user/:username' element={<UserPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)