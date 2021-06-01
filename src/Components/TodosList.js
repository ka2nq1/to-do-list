import React from 'react'
import { connect } from 'react-redux'
import { searchFilter } from '../redux/action/addTodo.action'
import Todo from './Todo'

const TodosList = ({ todos, searchFilter, filteredTodos }) => {
  const handleChange = e => {
    searchFilter(e.target.value)
  }

  return (
    <>
      {todos.length > 1 ?
        <input className='searchInput' onChange={handleChange} type='text' placeholder='Поиск...' />
        : ''
      }
      <div className='todoList'>
        {
          todos.map((todo, i) => (
            todo.toLowerCase().includes(filteredTodos) ?
              <Todo key={i} todo={todo} idx={i} />
              : ''
          ))
        }
      </div>
    </>
  )
}


const mapStateToProps = ({ todos, filteredTodos }) => ({ todos, filteredTodos })
const mapDispatchToProps = dispatch => ({
  searchFilter: text => dispatch(searchFilter(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodosList)