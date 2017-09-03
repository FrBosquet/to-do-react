import React from 'react'
import Title from '../Title/Title.jsx'
import TodoForm from '../TodoForm/TodoForm.jsx'
import TodoList from '../TodoList/TodoList.jsx'

window.id = 0;

class TodoApp extends React.Component {
  constructor ( props ){
    super(props)

    this.state = {
      data: []
    }
  }

  addTodo( val ){
    const todo = { text: val, id: window.id++}
    this.setState( {data: [...this.state.data, todo]} )
  }

  handleRemove( id ){
    this.setState({data: this.state.data.filter( todo => todo.id != id)})
  }

  render(){
    return (
      <div className='app'>
        <Title/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos= { this.state.data }
          remove= { this.handleRemove.bind(this) }
        />
      </div>
    )
  }
}

export default TodoApp
