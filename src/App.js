import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // массив тасков/функция меняющая этот массив
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Состояние для темы

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false, urgency: 'week' }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changeUrgency = (id, urgency) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, urgency } : task
      )
    );
  };

  // Логика переключения темы
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark', !isDarkTheme);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Кнопка для переключения темы */}
      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>

      <ToDoForm onAdd={addTask} />
      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onUrgencyChange={changeUrgency}
      />
    </div>
  );
}

export default App;
