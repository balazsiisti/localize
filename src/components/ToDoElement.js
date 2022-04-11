import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ToDoElement({ element, changeStatus, editTodo, deleteTodo }) {
  return (
    <div className='task'>
      <input type='checkbox' checked={element.done} onChange={() => changeStatus(element.id)} />
      <div style={{ textDecoration: element.done && 'line-through' }}>{element.task}</div>
      <div className='action-buttons'>
        <FaEdit onClick={() => editTodo(element)} />
        <FaTrash onClick={() => deleteTodo(element.id)} />
      </div>
    </div>
  )
}

export default ToDoElement