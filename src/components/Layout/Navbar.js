import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
export const Navbar = () => {
  return (
  <nav className='App-link'>
  <Link style={{margin:'10px',listStyleType:'none'}} to='/'>Home</Link>
  <Link style={{margin:'10px'}} to='/showBook'>show book</Link>
  <Link style={{margin:'10px'}} to='/addBook'>add books</Link>

  </nav>
  )
}
