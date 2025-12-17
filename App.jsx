import React, { useState } from 'react';
import styles from './App.module.css';

// Mock-данные для досок
const initialBoards = [
  {
    id: 1,
    title: "Учебная доска",
    description: "Доска для заданий и конспектов по React",
    createdAt: "2025-03-15"
  },
  {
    id: 2,
    title: "Проектная доска",
    description: "Управление задачами текущего проекта",
    createdAt: "2025-03-18"
  },
  {
    id: 3,
    title: "Личные заметки",
    description: "Идеи и планы на будущее",
    createdAt: "2025-03-20"
  }
];

function App() {
  // Состояние для хранения массива досок
  const [boards, setBoards] = useState(initialBoards);
  
  // Состояния для формы добавления новой доски
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Функция добавления новой доски
  const addBoard = () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const newBoard = {
      id: Date.now(), // Уникальный id на основе времени
      title: newTitle,
      description: newDescription,
      createdAt: new Date().toISOString().split('T')[0] // Формат YYYY-MM-DD
    };

    // Добавление новой доски через spread оператор (без мутации)
    setBoards([...boards, newBoard]);
    
    // Очистка полей формы
    setNewTitle('');
    setNewDescription('');
  };

  // Функция удаления доски по id
  const deleteBoard = (id) => {
    // Используем filter для создания нового массива без мутации
    setBoards(boards.filter(board => board.id !== id));
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Мои доски</h1>
      </header>

      <main className={styles.main}>
        {/* Форма добавления новой доски */}
        <div className={styles.addForm}>
          <h2 className={styles.formTitle}>Добавить новую доску</h2>
          <input
            type="text"
            className={styles.input}
            placeholder="Название доски"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Описание доски"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className={styles.addButton} onClick={addBoard}>
            Добавить доску
          </button>
        </div>

        {/* Список досок */}
        <div className={styles.boardsList}>
          {boards.map((board) => (
            <div key={board.id} className={styles.boardCard}>
              <div className={styles.boardHeader}>
                <h3 className={styles.boardTitle}>{board.title}</h3>
                <button 
                  className={styles.deleteButton}
                  onClick={() => deleteBoard(board.id)}
                >
                  Удалить
                </button>
              </div>
              <p className={styles.boardDescription}>{board.description}</p>
              <span className={styles.boardDate}>
                Создано: {board.createdAt}
              </span>
            </div>
          ))}
        </div>

        {/* Сообщение если досок нет */}
        {boards.length === 0 && (
          <p className={styles.emptyMessage}>
            Нет досок. Создайте первую доску!
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
