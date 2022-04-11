import './index.css';
import { useState, useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import Stats from './components/Stats';
import { Link } from 'react-router-dom';

function App() {
  const aboutPageQueryString = 13;
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todolist");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [itemToEdit, setItemToEdit] = useState();

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }, [todoList]);

  const changeStatus = (id) => {
    setTodoList(prev => prev.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }
      return task;
    }));
  }

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div>
      <ToDoForm
        addTodo={setTodoList}
        itemToEdit={itemToEdit}
        setItemToEdit={setItemToEdit}
      />
      <Stats todoList={todoList} />
      <ToDoList
        list={todoList}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        editTodo={setItemToEdit}
      />
      <Link to={`/about/${aboutPageQueryString}`}>
        <FaQuestion />
      </Link>
    </div >
  );
}

export default App;
