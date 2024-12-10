import Header from "./Header.jsx";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [todos, setTodos] = useState(() => {
    let todo = localStorage.getItem("todoList");
    return todo ? JSON.parse(todo) : [];
  });

  function addTodos(todo) {
    const newTodo = { name: todo, done: false };
    setTodos([...todos, newTodo]);
  }
  
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header />
      <TodoInput todos={todos} addTodos={addTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
