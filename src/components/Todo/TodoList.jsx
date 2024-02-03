import { Todo } from "./Todo";

export function TodoList ({toDos}){
  return(
    <ul>
       {toDos.map((toDo) => {
         return <Todo
           text={toDo.text}
           completed={toDo.completed}
           />
        })}
    </ul>
  )
}