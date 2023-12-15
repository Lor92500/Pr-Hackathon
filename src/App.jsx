// import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
// import Home from './pages/Home'
// import Characters from './pages/Characters'
// import Contact from './pages/Contact'
import Header from './pages/Header';


function App() {

  return (
    <>
      <nav>
        <Header />
        <main>
          <Outlet />
        </main>
      </nav>
    </>
  )
}

export default App
