import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Statechange from './Components/Statechange'
import ToDoList from './Components/ToDoList'
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/todo' element={<ToDoList/>}/>
        </Routes>
      </Router>
      <div>
        <Statechange/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
