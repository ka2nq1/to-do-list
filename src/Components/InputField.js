import { React, Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action/addTodo.action'

class InputField extends Component {
  state = {
    todo:''
  }

  handleChange = e => this.setState({ todo: e.target.value })
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='todo' placeholder='Добавить заметку...' onChange={this.handleChange} />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo : todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps) (InputField);