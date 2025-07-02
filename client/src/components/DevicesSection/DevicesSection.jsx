import React, { useEffect, useState } from 'react';
import styles from './DevicesSection.module.css';
import { getDevices, toggleDevice } from '../../services/deviceService';
import { useLoader } from '../common/Loader/LoaderContext';
import { toast } from 'react-toastify';
import { FaLightbulb, FaSnowflake, FaLock } from 'react-icons/fa';

// Helper to map device names to icons
const deviceIconMap = [
  { key: 'light', icon: FaLightbulb },
  { key: 'ac', icon: FaSnowflake },
  { key: 'lock', icon: FaLock },
];

function getDeviceIcon(name) {
  const found = deviceIconMap.find(({ key }) => name.toLowerCase().includes(key));
  return found ? found.icon : null;
}

const Device = () => {
  const [devices, setDevices] = useState([]);
  const { setLoading } = useLoader();

  const fetchDevices = async () => {
    setLoading(true);
    try {
    const data = await getDevices();
    setDevices(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id) => {
    setLoading(true);
    try {
    await toggleDevice(id);
      toast.success('Device status updated');
    fetchDevices();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className={styles.devicesContainer}>
      <h2 className="sectionHeading " style={{textAlign: 'left'}}>Smart Devices</h2>
      <div className="sectionDescription">
        Simulates control of 3 smart home devices (e.g., Light, AC, Lock).
      </div>
      <ul className={styles.list}>
        {devices.map(({ _id, name, status }) => {
          const Icon = getDeviceIcon(name);
          return (
            <li key={_id} className={styles.item}>
              <span>{Icon && <Icon style={{ marginRight: 8 }} />} {name}</span>
              <button
                onClick={() => handleToggle(_id)}
                className={status ? styles.on : styles.off}
                title={status ? 'Turn OFF' : 'Turn ON'}
              >
                {status ? 'ON' : 'OFF'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Device;
