import React from 'react'
import { connect } from 'react-redux'
import { addText, addTodo, editAddTodo } from '../redux/action/addTodo.action'

const InputField = ({addText, text, selected, addTodo, editAddTodo}) => {
  const handleChange = e => {
    addText(e.target.value)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    if (selected || selected === 0) {
    editAddTodo({
      value: text,
      selected: selected
    })
  }
    else
    if (text) {
      addTodo(text)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='appForm'>
      <input
        className='appInput'
        type='text'
        name='todo'
        value={text}
        autoComplete='off'
        placeholder='Добавить заметку...'
        onChange={handleChange} />
      <i onClick={handleSubmit} class="fa fa-plus" aria-hidden="true"></i>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj)) 
})
const mapStateToProps = ({text, selected}) => ({
  text, selected
})
export default connect(mapStateToProps, mapDispatchToProps) (InputField);