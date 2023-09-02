import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import react from "react";
import { CreateTodoButton } from "../CreateTodoButton";

// const defaultTodos = [
//   { text: "sacar al perro", completed: true },
//   { text: "llorar", completed: true },
//   { text: "dormir", completed: false },
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

// localStorage.removeItem('tareas_v1')
function useLocalStorage(itemName, initianValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initianValue));
    parsedItems = initianValue;
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }
  const [item, setItem] = react.useState(parsedItems);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      { <CreateTodoButton />}
    </>
  );
}

export default App;
