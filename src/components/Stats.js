import React from 'react'

const Stats = ({ todoList }) => {
  return (
    <div className='card'>
      <div>
        <b>{todoList.length}</b> tasks in total
      </div>
      <div><b>{todoList.filter(task => task.done).length}</b> task are done</div>
      <div><b>{todoList.filter(task => !task.done).length}</b> task are remaining</div>
    </div>
  )
}

export default Stats