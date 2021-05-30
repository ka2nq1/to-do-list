import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import InputField from './Components/InputField'
import TodosList from './Components/TodosList'
import { deleteAll, persistTodos } from './redux/action/addTodo.action'

const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos()
  }, [persistTodos])
  return (
    <div className="App">
      <h1>Todos App</h1>
      <InputField />
      <TodosList />
      <button onClick={() => deleteAll()} style={{cursor: 'pointer'}}>Delete All</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
})
export default connect(null, mapDispatchToProps)(App);
