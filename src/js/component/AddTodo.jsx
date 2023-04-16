import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') return;
    onAdd(newTodo.trim());
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        placeholder="Add a new task..."
        className="add-todo-input"
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button type="submit" className='add-buton'>Add</button>
    </form>
  );
};

export default AddTodo;
