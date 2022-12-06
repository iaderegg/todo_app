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
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';


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

          {error && <TodoError error={error} />}
          {loading && <TodoLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}

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
            <TodoForm />
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
