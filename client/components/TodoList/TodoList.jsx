import React from 'react'
import Todo from '../Todo/Todo.jsx';

const TodoList = ({todos, remove})=>{
  const todoNode = todos.map(todo =>
    <Todo todo={todo} key={todo.id} remove={remove} />
  )

  return <ul>{todoNode}</ul>
}

export default TodoList
