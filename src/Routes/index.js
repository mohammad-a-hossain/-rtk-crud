import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Addbook } from '../components/frature/Books/Addbook'
import { EditBooks } from '../components/frature/Books/EditBooks'
import { Navbar } from '../components/Layout/Navbar'
import { Error } from '../pages/Error'
import { Home } from '../pages/Home'
import  Bookview  from './../components/frature/Books/Bookview';



export const Index = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='*' element={<Error/>} />
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/addBook' element={<Addbook/>} />
    <Route exact path='/showBook' element={<Bookview/>} />
    <Route exact path='/edit-books' element={<EditBooks/>} />
    
    
    </Routes>
    
    </BrowserRouter>
    
  )
}
