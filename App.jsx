import React from 'react';
import UserList from './components/UserList';
import styles from './App.module.css';

// Массив объектов пользователей (вместо базы данных)
const users = [
  {
    id: 1,
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    age: 28,
    role: 'Разработчик'
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    email: 'maria.sidorova@example.com',
    age: 32,
    role: 'Дизайнер'
  },
  {
    id: 3,
    name: 'Алексей Козлов',
    email: 'alexey.kozlov@example.com',
    age: 25,
    role: 'Менеджер'
  },
  {
    id: 4,
    name: 'Елена Волкова',
    email: 'elena.volkova@example.com',
    age: 30,
    role: 'Тестировщик'
  },
  {
    id: 5,
    name: 'Дмитрий Новиков',
    email: 'dmitry.novikov@example.com',
    age: 27,
    role: 'Разработчик'
  }
];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Список пользователей</h1>
      </header>
      <main className={styles.main}>
        {/* Передача массива в компонент через props */}
        <UserList users={users} />
      </main>
    </div>
  );
}

export default App;


