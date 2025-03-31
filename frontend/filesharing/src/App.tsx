import { useState } from 'react'
import { Link, Outlet, Route, Routes } from "react-router";
import { Homepage } from './pages/HomePage';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer';
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes >
    </>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
