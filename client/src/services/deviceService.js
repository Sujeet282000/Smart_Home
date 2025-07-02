import api, { DEVICE_API } from './api';

export const getDevices = async () => {
  try {
    const res = await api.get(DEVICE_API);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch devices');
  }
};

export const toggleDevice = async (id) => {
  try {
    const res = await api.put(`${DEVICE_API}/${id}/toggle`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Toggle device failed');
  }
};
