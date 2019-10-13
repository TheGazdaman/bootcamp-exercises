import React from 'react';
import TodoItem from './TodoItem.jsx'; 
import TodosData from './TodosData.jsx'

const MainContent = () => {
  const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  )
}



export default MainContent

