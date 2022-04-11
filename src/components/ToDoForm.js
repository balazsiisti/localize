import { useState, useEffect } from 'react';

const ToDoForm = ({ addTodo, itemToEdit, setItemToEdit }) => {
  const [text, setText] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (itemToEdit) {
      setText(itemToEdit.task);
      setDisableButton(false);
    }
  }, [itemToEdit])

  const hanldeTextChange = (e) => {
    if (e.target.value !== '') {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemToEdit) {
      addTodo(prev => prev.map(el => {
        if (itemToEdit.id === el.id) {
          return {
            ...el,
            task: text,
            done: false,
          }
        }
        return el;
      }))
      console.log('item to edit');
      setItemToEdit();
    } else {
      let todo = {
        id: Math.round(Math.random() * 1000),
        task: text,
        done: false,
      }
      addTodo(prev => {
        return [...prev, todo];
      })
    }
    setText('');
    setDisableButton(true);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>Add a new todo:</h2>
        <input onChange={hanldeTextChange} value={text} placeholder="Enter a new task" />
        <button type="submit" disabled={disableButton}>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm