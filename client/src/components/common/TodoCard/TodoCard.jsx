import React from 'react';
import styles from './TodoCard.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoCard = ({ title, description, completed, onToggle, onEdit, onDelete }) => (
  <li className={styles.todoCardCard}>
    <div className={styles.todoCardTopRow}>
      <h4 className={styles.todoCardTitle}>{title}</h4>
      <div className={styles.todoCardCompleteRow}>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          title="Mark as completed"
          className={styles.todoCardCheckbox}
        />
        <span className={styles.todoCardCompleteLabel}>Mark as completed</span>
      </div>
    </div>
    <div className={styles.todoCardContent}>
      <p className={styles.todoCardDescription}>{description}</p>
    </div>
    <div className={styles.todoCardActionsBottom}>
      <button className={styles.todoCardEditBtn} onClick={onEdit} title="Edit">
        <FaEdit />
      </button>
      <button className={styles.todoCardDeleteBtn} onClick={onDelete} title="Delete">
        <FaTrash />
      </button>
    </div>
  </li>
);

export default TodoCard; 