import React, { useEffect, useState } from 'react';
import styles from './Todo.module.css';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
} from '../../services/todoService';
import TodoCard from '../common/TodoCard/TodoCard';
import { useLoader } from '../common/Loader/LoaderContext';
import { toast } from 'react-toastify';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [editId, setEditId] = useState(null);
  const { setLoading } = useLoader();

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        await updateTodo(editId, form);
        toast.success('Todo updated');
      } else {
        await addTodo(form);
        toast.success('Todo added');
      }
      setForm({ title: '', description: '' });
      setEditId(null);
      fetchTodos();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (todo) => {
    setForm({ title: todo.title, description: todo.description });
    setEditId(todo._id);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteTodo(id);
      toast.success('Todo deleted');
      fetchTodos();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id) => {
    setLoading(true);
    try {
      await toggleTodo(id);
      toast.success('Todo status updated');
      fetchTodos();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={styles.todoContainer}>
      <h2 className="sectionHeading" style={{textAlign: 'left'}}>To-Do List</h2>
      <div className="sectionDescription">
        Interactive to-do list allowing users to create, read, update, delete, and mark tasks as complete. 
      </div>
      <div className={styles.todoDivider}></div>
      <div className={styles.todoGridSection}>
        <div className={styles.todoLeft}>
          <h3 className={styles.todoSubheading}>Add Todo</h3>
          <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className={styles.todoFormInput}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
              className={styles.todoFormInput}
              rows={3}
            />
            <button type="submit" className={styles.todoFormButton}>{editId ? 'Update' : 'Add'}</button>
          </form>
        </div>
        <div className={styles.todoRight}>
          <h3 className={styles.todoSubheading}>Todo List</h3>
          <ul className={styles.todoList}>
            {todos.map((todo) => (
              <TodoCard
                key={todo._id}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                onToggle={() => handleToggle(todo._id)}
                onEdit={() => handleEdit(todo)}
                onDelete={() => handleDelete(todo._id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;