import React, { useState } from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';

const App = () => {
	const [todos, setTodos] = useState([]);
  
	const handleAddTodo = (newTodo) => {
	  if (todos.find((todo) => todo.title === newTodo)) return;
	  const newId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
	  const newTodoItem = { id: newId, title: newTodo };
	  setTodos([...todos, newTodoItem]);
	};
  
	const handleDeleteTodo = (id) => {
	  setTodos(todos.filter((todo) => todo.id !== id));
	};
  
	return (
	  <div className="app-container">
		<h1 className="title">To-Do List</h1>
		<AddTodo onAdd={handleAddTodo} />
		<TodoList todos={todos} onDelete={handleDeleteTodo} />
	  </div>
	);
  };
  
  export default App;