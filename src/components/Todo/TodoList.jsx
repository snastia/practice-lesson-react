import {ToDo} from "./Todo"

export function TodoList({todos, onDelete, onToggleCompleted}){
    return(
        <ul>
          {todos.map((todo)=>{
              return  <ToDo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onDelete={onDelete}
                todoId={todo.id}
                toggle={onToggleCompleted}
                />
            })}
        </ul>
    )
}