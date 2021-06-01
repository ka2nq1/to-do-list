export const persistTodos = () => ({
  type: 'PERSIST_TODOS'
})

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
})

export const addText = value => ({
  type: 'ADD_TEXT',
  payload: value
})

export const deleteTodo = key => ({
  type: 'DELETE_TODO',
  payload: key
})

export const editTodo = key => ({
  type: 'EDIT_TODO',
  payload: key
})

export const editAddTodo = obj => ({
  type: 'EDIT_ADD_TODO',
  payload: obj
})

export const deleteAll = () => ({
  type: 'DELETE_ALL'
})

export const searchFilter = text => ({
  type: 'SEARCH_FILTER',
  payload: text
});