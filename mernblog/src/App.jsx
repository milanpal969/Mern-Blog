import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/home'
import About from './Pages/about'
import Dashboard from './Pages/dashboard'
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Projects from './Pages/projects'


export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/signin' element = {<Signin/>}/>
    <Route path='signup/' element = {<Signup/>}/>
    <Route path='projects/' element = {<Projects/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}
