import React from 'react'
import '../../../App.css'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { deletebook } from '../../../bookslice/bookSlice'

 const Bookview = () => {
  const {books} = useSelector(state => state.books)
 //console.log(books)
  const dispatch = useDispatch()

  //const [books,setBooks] = useState({books}) 
        
  const handleDelte=(id)=>{
    dispatch(deletebook(id))
   
  }

  return (
    <div>
    <h3 style={{textAlign:'center'}}>show book list table</h3>

   
    <table>
    <tr>
      <th>name</th>
      <th>title</th>
      <th>author</th>
      <th>action</th>
    </tr>
    {books && books.map((book)=>{
      const {id, name,title,author}= book
      return <tr key={id}>
      <td>{name}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td style={{display:'flex',justifyContent:'center',alignContent:'space-between'}}>
      <Link to='/edit-books' state={{id,name,title,author}}><button>edit </button></Link>  
      <button onClick={()=> handleDelte(id)}>delete</button>
      </td>
    </tr>
    })}
 
  </table>
  
  
    
    </div>
  )
}
export default Bookview