// Создаём компонент для добавления новой задачи.
import React, { useState } from 'react';

// Тут сделаем компонент добавления формы
function ToDoForm({ onAdd }) {
  // Состояние для текста новой задачи и функция для его изменения
  const [text, setText] = useState('');
  // Функция для обработки сабмита формы и добавления новой задачи в список
  const handleSubmit = (e) => {
    // Отключил перезагруз страницы
    e.preventDefault();
    // Если текст пустой, не добавляем новую задачу в список и не выполняем сабмит формы
    if (!text.trim()) return;
    // Добавляем новую задачу в список и очищаем текстовое поле формы
    onAdd(text);
    // Очищаем текстовое поле формы после добавления новой задачи
    setText('');
  };
  // Выводим форму с текстовым полем и кнопкой добавления новой задачи
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoForm;
