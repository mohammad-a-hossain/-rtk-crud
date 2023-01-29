import React, { useState } from 'react'
import '../../../App.css'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addBooks } from '../../../bookslice/bookSlice'
import { useNavigate} from 'react-router-dom';


export const Addbook = () => {
  const [name,setName] =useState('')
  const [title,setTitle] =useState('')
  const [author,setAuthor] =useState('')
  
const navigate= useNavigate()


/*   const [user,setUser] = useState({
    id:uuidv4(),
    name:'',
    title:'',
    author:''

  }) */
  
  
  const dispatch = useDispatch()

   /* const handleChange=(e)=>{
     setUser({
      ...user,
      [e.target.value]:e.target.name
     })
  }  */
  const handleSubmit=(e)=>{// console.log(user)
     e.preventDefault()
     const books={
      id:uuidv4(),
       name,
       title,
      author
     }
     dispatch(addBooks(books))
     navigate('/showBook', {replace :true})
    
  }

  return (
    <div>
   <h3 style={{textAlign:'center'}}> Addbook</h3>

    <form onSubmit={handleSubmit} style={{width:'50%',margin:'auto'}}>
    <label for="fname">Name</label>
    <input className='input' type="text"
     id="name" name="name" value={name}
     onChange= {(e)=>setName(e.target.value)}
      placeholder="Your name.."/>

    <label for="title">Title</label>
    <input className='input' type="text" id="title" 
    name="title" value={title}
    onChange= {(e)=>setTitle(e.target.value)}
     placeholder="Your name.."/>

    <label for="fname">author</label>

    <input className='input' type="text"
     id="author" name="author" value={author} 
      onChange= {(e)=>setAuthor(e.target.value)}
     placeholder="Your name.."/>
  
    <input className='.input' type="submit" value="Submit"/>
  </form>
    </div>
  )
}
