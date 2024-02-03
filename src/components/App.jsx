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
      <TodoList toDos={this.state.toDos}/>
    </div>
  )
  }
    
};
