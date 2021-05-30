import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/action/addTodo.action'

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div>
      <div>
        <span onClick={() => editTodo(idx)}>
        {
          selected === idx ? text : todo
        }
        </span>
        <span onClick={() => deleteTodo(idx)} style={{ marginLeft: '50px', cursor: 'pointer'}}>x</span>
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