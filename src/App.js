import React from 'react'
import { TodoTitle } from './TodoTitle'
import { TodoMessage } from './TodoMessage'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Asistir a entrevista', completed: false },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

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
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed} />
            ))}
          </TodoList>

          <CreateTodoButton />

        </div>

    </React.Fragment>
  );
}

export default App;
