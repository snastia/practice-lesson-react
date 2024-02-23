import { Component } from "react"
import { Btn } from "components/Button/Button"
import { CgPlayListAdd } from "react-icons/cg";
import { TextArea } from "./GoalForm.styled";

export class GoalForm extends Component{

  state = {
    goal: "",
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
        <TextArea name="goal" value={this.state.goal} onChange={this.handleAreaClick}></TextArea>
        <Btn type="submit"><CgPlayListAdd size={25}/></Btn>
    </form>
  )
  }
 
}