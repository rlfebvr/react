function TodoList(props) {
  let todos = props.todos;
  const checkTodo = props.checkTodo;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.key}>
          
          <input
            id={todo.key}
            type="checkbox"
            onChange={() => checkTodo(todo.key)}
            checked={todo.done}
          />{" "}
          {index + 1} {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
