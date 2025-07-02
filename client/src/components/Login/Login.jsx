import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { useLoader } from '../common/Loader/LoaderContext';
import { toast } from 'react-toastify';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { setLoading } = useLoader();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token } = await loginUser(formData.email, formData.password);
      localStorage.setItem('token', token);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className="sectionHeading" style={{textAlign: 'left'}}>Welcome to Smart Home Dashboard</h2>
      <div className="sectionDescription">Login to access your smart home</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.inputWrapper}>
          <FaUser className={styles.inputIcon} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <FaLock className={styles.inputIcon} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          <FaSignInAlt style={{ marginRight: 8 }} /> Login
        </button>
      </form>
    </div>
  );
};

export default Login;
