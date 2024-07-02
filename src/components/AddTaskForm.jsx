import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    onAddTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>
      
    </div>
  );
}

export default AddTaskForm;
