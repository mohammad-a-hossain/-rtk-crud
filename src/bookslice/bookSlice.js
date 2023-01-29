import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState=
   {
     books:[
        { id:uuidv4(),
          name:'abu',
          title:'abu title',
          author:'abu hossain'}
        ]
    }


export const bookSlice = createSlice({
    name:'books',
    initialState:initialState,
    reducers:{
        showbooks:(state)=> state,
        addBooks:(state,action)=>{
             state.books.push(action.payload)
        },
        editBooks:(state,action)=>{
          const  {id,title,name,author} = action.payload 
            const updateBooks= state.books.filter((book) => book.id === id)

            if(updateBooks){
                updateBooks[0].author = author
                updateBooks[0].name   = name
                updateBooks[0].title  = title 
            }
        }, 
        deletebook:(state,action)=>{
            const  id = action.payload 
            state.books= state.books.filter((book) => book.id !== id)
        }

    },
})

export const {showbooks,addBooks,editBooks,deletebook} = bookSlice.actions
export default bookSlice.reducer