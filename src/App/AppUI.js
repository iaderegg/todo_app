import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoTitle } from '../TodoTitle'
import { TodoMessage } from '../TodoMessage'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  return (
    <React.Fragment>

      <div className='container'>

        <TodoTitle text="My TODO's app" />

        <TodoMessage text="Hello Iader!" />

        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
          }) => (
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
          )}

        </TodoContext.Consumer>



        <CreateTodoButton />

      </div>

    </React.Fragment>
  );
}

export { AppUI };
