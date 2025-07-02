import Device from '../models/Device.js';

export const getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const toggleDeviceStatus = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    device.status = !device.status;
    await device.save();
    res.json(device);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};