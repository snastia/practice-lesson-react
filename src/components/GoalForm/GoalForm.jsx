import { Component } from "react"

export class GoalForm extends Component{

  state = {
    goal: ""
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.addToDo(e.currentTarget.elements.goal.value)
    this.setState({goal: ""})
  }

  handleAreaClick = (e) => {
    this.setState({
      goal: e.currentTarget.value
    })
  }

  render(){
     return(
    <form onSubmit={this.handleFormSubmit}>
        <textarea name="goal" value={this.state.goal} onChange={this.handleAreaClick}></textarea>
        <button type="submit">Create</button>
    </form>
  )
  }
 
}