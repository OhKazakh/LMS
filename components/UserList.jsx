import React from 'react';
import styles from './UserList.module.css';

function UserList({ users }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Всего пользователей: {users.length}</h2>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.item}>
            <div className={styles.card}>
              <h3 className={styles.name}>{user.name}</h3>
              <p className={styles.email}>
                <span className={styles.label}>Email:</span> {user.email}
              </p>
              <p className={styles.age}>
                <span className={styles.label}>Возраст:</span> {user.age} лет
              </p>
              <p className={styles.role}>
                <span className={styles.label}>Роль:</span> {user.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

