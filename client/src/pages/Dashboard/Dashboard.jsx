// 📁 client/src/pages/Dashboard.jsx
import React from 'react';
import Weather from '../../components/Weather/Weather';
import Todo from '../../components/Todo/Todo';
import Device from '../../components/DevicesSection/DevicesSection';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.heading}>Smart Home Dashboard</h1>
      <div className={styles.section}>
        <Weather />
      </div>
      <div className={styles.section}>
        <Todo />
      </div>
      <div className={styles.section}>
        <Device />
      </div>
    </div>
  );
}