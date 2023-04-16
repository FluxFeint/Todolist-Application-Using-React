import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li className="no-tasks">No tasks, add a task!</li>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-title">{todo.title}</div>
            <button
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
