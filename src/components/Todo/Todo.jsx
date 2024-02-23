import { Button } from "components/Button/Button.styled"
import { Item, Text } from "./Todo.styled"

export function ToDo({todoId, text, completed, onDelete, toggle}){

    const handleDelete = () =>{
       onDelete(todoId)
    }
   
    const handleChange= () =>{
       toggle(todoId)
    }
      return(
       <Item>
           <input type="checkbox" name="" id="" checked={completed} onChange={handleChange}/>
           <Text>{text}</Text>
           <Button type="button" onClick={handleDelete}>Delete</Button>
       </Item>
      )
   }