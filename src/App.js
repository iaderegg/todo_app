import React from 'react'
import { TodoTitle } from './TodoTitle'
import { TodoMessage } from './TodoMessage'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Asistir a entrevista', completed: false },
];

function App() {
  return (
    <React.Fragment>

        <div className='container'>

          <TodoTitle text="My TODO's app"/>

          <TodoMessage text="Hello Iader!"/>

          <TodoCounter />

          <TodoSearch />

          <TodoList>
            {todos.map(todo => (
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
