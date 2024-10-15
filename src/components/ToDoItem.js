// src/components/ToDoItem.js
import React from 'react';

// Мы принимаем task как пропс, который содержит информацию о задаче.
// onDelete: функция для удаления задачи
// onToggle: функция для переключения состояния выполнения задачи
// onUrgencyChange: срочность
function ToDoItem({ task, onDelete, onToggle, onUrgencyChange }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>

      {/* Выпадающий список для выбора срочности задачи */}
      <select
        value={task.urgency}
        onChange={(e) => onUrgencyChange(task.id, e.target.value)}
        style={{ marginLeft: '10px' }}
      >
        <option value="urgent">Срочно</option>
        <option value="3days">В течение 3 рабочих дней</option>
        <option value="week">Неделя</option>
        <option value="month">Месяц</option>
      </select>

      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
}

export default ToDoItem;
