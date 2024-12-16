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
    const newTodo = {key: Date.now(), name: todo, done: false };
    setTodos([...todos, newTodo]);
}

function checkTodo(todo){
  if (todo.done === true) todo.done = false;
    else todo.done = true;
}
  
  
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Header />
      <TodoInput todos={todos} addTodos={addTodos} />
      <TodoList todos={todos} checkTodo={checkTodo} />
    </>
  );
}

export default App;