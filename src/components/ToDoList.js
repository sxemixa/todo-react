// src/components/ToDoList.js
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onDelete, onToggle, onUrgencyChange }) {
  // Группируем задачи по срочности
  const groupedTasks = {
    urgent: tasks.filter(task => task.urgency === 'urgent'),
    threeDays: tasks.filter(task => task.urgency === '3days'),
    week: tasks.filter(task => task.urgency === 'week'),
    month: tasks.filter(task => task.urgency === 'month'),
  };

  return (
    <div>
      {/* Отображаем задачи по группам */}
      <h2>Срочные задачи</h2>
      {groupedTasks.urgent.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUrgencyChange={onUrgencyChange}
        />
      ))}

      <h2>В течение 3 рабочих дней</h2>
      {groupedTasks.threeDays.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUrgencyChange={onUrgencyChange}
        />
      ))}

      <h2>На неделю</h2>
      {groupedTasks.week.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUrgencyChange={onUrgencyChange}
        />
      ))}

      <h2>На месяц</h2>
      {groupedTasks.month.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUrgencyChange={onUrgencyChange}
        />
      ))}
    </div>
  );
}

export default ToDoList;
