import React from 'react'

const Todo = ({todo, remove}) =>
  <li onClick={()=>remove(todo.id)}>{ todo.text }</li>

export default Todo
