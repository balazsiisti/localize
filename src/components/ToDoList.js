import React from 'react'
import ToDoElement from './ToDoElement'
import { motion, AnimatePresence } from 'framer-motion';

function ToDoList({ list, changeStatus, editTodo, deleteTodo }) {
  if (list.length === 0 || !list) {
    return <div>No task to do!</div>
  }

  return (
    <div className='card'>
      <AnimatePresence>
        {list.map(el => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ToDoElement
              element={el}
              changeStatus={changeStatus}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ToDoList