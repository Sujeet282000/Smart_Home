import api, { TODO_API } from './api';

export const getTodos = async () => {
  try {
    const res = await api.get(TODO_API);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch todos');
  }
};

export const addTodo = async (todo) => {
  try {
    const res = await api.post(TODO_API, todo);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Add todo failed');
  }
};

export const updateTodo = async (id, data) => {
  try {
    const res = await api.put(`${TODO_API}/${id}`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Update todo failed');
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await api.delete(`${TODO_API}/${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Delete todo failed');
  }
};

export const toggleTodo = async (id) => {
  try {
    const res = await api.put(`${TODO_API}/${id}/toggle`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Toggle complete failed');
  }
};
