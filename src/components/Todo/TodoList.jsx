import {ToDo} from "./Todo"

export function TodoList({toDos, onDelete, onToggleCompleted, visibleTodos}){
    console.log(toDos)
    return(
        <ul>
          {visibleTodos.map((todo)=>{
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