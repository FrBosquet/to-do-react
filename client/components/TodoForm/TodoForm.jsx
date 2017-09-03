import React from 'react'

const TodoForm = ({addTodo}) => {
  let input

  return (
    <div className='todo-form'>
      <input ref={node => input = node}/>
      <button onClick={()=>{
        addTodo(input.value)
        input.value = ''
      }}>
        +
      </button>
    </div>
  )
}

export default TodoForm
