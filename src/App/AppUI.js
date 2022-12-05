import React from 'react';
import { TodoTitle } from '../TodoTitle'
import { TodoMessage } from '../TodoMessage'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>

        <div className='container'>

          <TodoTitle text="My TODO's app"/>

          <TodoMessage text="Hello Iader!"/>

          <TodoCounter
            total={totalTodos}
            completed={completedTodos}
          />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

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

          <CreateTodoButton />

        </div>

        </React.Fragment>
    );
}

export { AppUI };
