import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/action/addTodo.action'

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div className='listItem'>
      <span className='itemText' >
        {
          selected === idx ? text : todo
        }
      </span>
      <div className='deleteBtn'>
        <i class="fa fa-pencil" aria-hidden="true" onClick={() => editTodo(idx)}></i>
        <i class="fa fa-trash" aria-hidden="true" onClick={() => deleteTodo(idx)}></i>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
})
const mapStateToProps = ({ text, selected }) => ({ text, selected })
export default connect(mapStateToProps, mapDispatchToProps)(Todo)