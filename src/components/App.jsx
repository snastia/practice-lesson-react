import { Component } from "react";
import { TodoList } from "./Todo/TodoList";
import initialTodos from "../todo.json";
import { nanoid } from "nanoid";
import { GoalForm } from "./GoalForm/GoalForm";

export class App extends Component {

    state = {
    toDos: initialTodos,
    filter: '',
  }

  componentDidUpdate(prevState){
    if(prevState.todos !== this.state.todos){
      window.localStorage.setItem('todos', JSON.stringify(this.state))
    }
    }

  toggleCompleted = (todoId) => {
    this.setState(prevState => (
      {todos: prevState.todos.map(todo=> todo.id === todoId ?{...todo, 
        completed: !todo.completed} : todo)
      })
    )
  }

  deleteTodo = (todoId) => {
      this.setState((prevState) => {
         return {
          todos: prevState.todos.filter(todo => todo.id !== todoId)
         }
      })
    }

  addToDo = (text) => {
    const newToDo = {
      text, // це теж саме що і text: text,
      completed: false,
      id: nanoid()
    }
    

    this.setState((prevState) => {
      return {
        toDos: [newToDo, ...prevState.toDos]
      }
    })

  }
  
  render(){
    return (
    <div>
      <GoalForm addToDo={this.addToDo}/>
      <TodoList toDos={this.state.toDos} onDelete={this.deleteTodo} onToggleCompiled={this.toggleCompleted}/>
    </div>
  )
  }
    
};
