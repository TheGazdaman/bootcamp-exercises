import React from 'react';
import TodoItem from './TodoItem.jsx'; 
import TodosData from './TodosData.jsx'

class MainContent extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: TodosData
      }
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}



export default MainContent



/* const MainContent = () => {
  const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  )
} */