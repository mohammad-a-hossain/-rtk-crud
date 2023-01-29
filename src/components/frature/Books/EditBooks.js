import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { editBooks } from '../../../bookslice/bookSlice';

export const EditBooks = () => {
  const location = useLocation()
  const dispatch =useDispatch()
  
  const navigate= useNavigate() 

  const [id,setId] = useState(location.state.id)
  const [name,setName] = useState(location.state.name)
  const [title,setTitle] = useState(location.state.title)
  const [author,setAuthor] = useState(location.state.author)

  const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(editBooks({id,title,name,author}))
        navigate('/showBook',{replace:true})
        
  }

  return (
    <div>
    <h4>EditBooks</h4> 
 
    <form onSubmit={handleUpdate} style={{width:'50%',margin:'auto'}}>
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
  
    <input className='.input' type="submit" value="Update"/>
  </form> 
    </div>
  )
}
