import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import InputField from './Components/InputField'
import TodosList from './Components/TodosList'
import { deleteAll, persistTodos } from './redux/action/addTodo.action'
import Styles from './Styles'

const App = ({ deleteAll, persistTodos, todos }) => {
  useEffect(() => {
    persistTodos()
  }, [persistTodos])
  return (
    <Styles>
      <h1 className='title'>Todos</h1>
      <div className="App">
        <InputField />
        <TodosList />
        {todos.length > 1 ?
          <button className='deleteAllBtn' onClick={() => deleteAll()}>Delete All</button> : ''
        }
      </div>
    </Styles>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
})
const mapStateToProps = ({todos}) => ({todos})
export default connect(mapStateToProps, mapDispatchToProps)(App);
