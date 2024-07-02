import './App.css'

import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: taskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} {task.completed ? '(Completado)' : ''}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>

          </li>
        ))}
      </ul>
      <AddTaskForm onAddTask={addTask} />

    </div>
  );
}

export default App;
