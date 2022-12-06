import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoTitle } from '../TodoTitle'
import { TodoMessage } from '../TodoMessage'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <div className='container'>

        <TodoTitle text="My TODO's app" />

        <TodoMessage text="Hello Iader!" />

        <TodoCounter />

        <TodoSearch />

        <TodoList>

          {error && <p>Ocurrió un error inesperado...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.lenght) && <p>Crea tu primer To Do!</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <p>Teletransportación!</p>
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
        />

      </div>

    </React.Fragment>
  );
}

export { AppUI };
