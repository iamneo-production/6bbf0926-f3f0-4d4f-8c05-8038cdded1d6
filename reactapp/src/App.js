import React from 'react'
import {  BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Destination from './components/Destination'
import Item from './components/Item'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
        <div>
        <Navbar/>
        <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/item/:id' element={<Item />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact="true" path="/" element={<Home />} />
        <Route path='*' element={<Home/>}/>


        </Routes>
        </div>
    </Router>
  )
}

export default App
