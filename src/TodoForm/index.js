import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoForm.css";

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="My new To Do's"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
