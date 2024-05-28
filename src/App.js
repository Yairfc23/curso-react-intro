import React from 'react';
import { TodoCounter }  from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }  from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true },
  {text: 'Tomar el curso de React', completed: true },
  {text: 'Llorar con la llorona', completed: true },
  {text: 'Cenar', completed: false },
  {text: 'Hacer ejercicio', completed: true },
  {text: 'CORRER 10 METROS', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todotext = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
        return todotext.includes(searchText);
    }
  );

  console.log('Los usuarios buscan TODOs de ' + searchValue);

  return (
    <React.Fragment>

      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key= {todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}


export default App;

