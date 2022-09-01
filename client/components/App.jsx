import React from 'react'
//import Pixel from './Pixel'
import { Routes, Route } from 'react-router-dom'
import NewPage from './NewPage'
import Nav from './Nav'
import Home from './Home'
import Tamers from './Tamers'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/tamer/:id" element={<Tamers />} />
        </Routes>
        <p>hi</p>
      </div>
    </>
  )
}

export default App
