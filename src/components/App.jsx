import { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { nanoid } from "nanoid";
import { TodoList } from "./Todo/TodoList";
import initialTodos from "../todo.json";
import { GoalForm } from "./GoalForm/GoalForm";
import { Modal } from "./Modal/Modal";
import { Btn } from "./Button/Button.jsx";
import { Filter } from "./Filter/Filter";
import { TextForm } from "./GoalForm/GoalForm.styled";

export class App extends Component {

    state = {
    toDos: initialTodos,
    filter: '',
    showModal: false
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  componentDidUpdate(prevState){
    if(prevState.todos !== this.state.todos){
      window.localStorage.setItem('todos', JSON.stringify(this.state))
    }
    }

  toggleCompleted = (todoId) => {
    this.setState(prevState => (
      {toDos: prevState.toDos.map(todo=> todo.id === todoId ?{...todo, 
        completed: !todo.completed} : todo)
      })
    )
  }

  deleteTodo = (todoId) => {
      this.setState((prevState) => {
         return {
          toDos: prevState.toDos.filter(todo => todo.id !== todoId)
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
    this.toggleModal()
  }

  toggleModal = () => {
    this.setState(prev => ({showModal: !prev.showModal}))
    }

    visibleTodos = () => {
     return this.state.toDos.filter(toDo => toDo.text.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
  
  render(){
    const visibleTodos = this.visibleTodos()
    return (
    <div>
      <Btn type="button" onClick={this.toggleModal}><FaPlus size={24}/></Btn>
   <Filter value={this.state.filter} onChange={this.changeFilter}/>
 {this.state.showModal &&
 <Modal onClose={this.toggleModal}>
  
<Btn type="button" onClick={this.toggleModal}><IoMdClose/></Btn>
<TextForm>Напишіть свою задачу.</TextForm>
<GoalForm addToDo={this.addToDo}/>
</Modal>}
      <TodoList 
      onDelete={this.deleteTodo} 
      onToggleCompleted={this.toggleCompleted} 
      visibleTodos={visibleTodos}/>
    </div>
  )
  } 
};
