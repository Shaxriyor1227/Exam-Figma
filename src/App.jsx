import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './Componets/BlogCms/Folder1/Nav'
import Heaader from './Componets/Folder2/Heaader'
import Main from './Componets/BlogCms/Folder3/Main'
import BlogMain from './Componets/Blog/Folder2/BlogMain'
import Footer from './Componets/BlogCms/Fotter/Fotter'

const HomePage = () => {
  return (
    <>
      <Main />
    </>
  )
}

const BlogPage = () => {
  return (
    <>
      <BlogMain />
    </>
  )
}

const Layout = () => {
  return (
    <>
      <Nav />
      <Heaader />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App