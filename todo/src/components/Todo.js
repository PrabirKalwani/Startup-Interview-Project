import React, { useState } from "react";

const Todo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, { id: todos.length + 1, title: newTodo, completed: false }];
      setTodos(updatedTodos);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <h2>Incomplete Todos</h2>
      <ul>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.title} <button onClick={() => toggleTodo(todo.id)}>Mark Completed</button>
            </li>
          ))}
      </ul>
      <h2>Completed Todos</h2>
      <ul>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.title} <button onClick={() => toggleTodo(todo.id)}>Mark Incomplete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
