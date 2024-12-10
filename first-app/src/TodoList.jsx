function TodoList(props){
    let todos = props.todos;
    return (
        <ul>
          {todos.map((todo,index) => (
            <li>
              <input type="checkbox" checked={todo.done}/> {index + 1} {todo.name}
            </li>
          ))}
        </ul>
      );
}

export default TodoList