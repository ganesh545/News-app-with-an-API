import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

export default function App() {
    return (
      <div>
      <Router>
          <Navbar/>
          <Routes>
          <Route exact path='/' element={<News   pagesize={9} country="in" category="general"/>}></Route>
          <Route exact path='/business'  element={<News pagesize={9} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News  pagesize={9} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general'  element={<News  pagesize={9} country="in" category="general"/>}></Route>
          <Route exact path='/health'  element={<News  pagesize={9} country="in" category="health"/>}></Route>
          <Route exact path='/science'  element={<News pagesize={9} country="in" category="science"/>}></Route>
          <Route exact path='/sports'  element={<News  pagesize={9} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News pagesize={9} country="in" category="technology"/>}></Route>
          
          </Routes>
          </Router>
      </div>
    )
  
}

