import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  try {
    const { email, password } = req.body;
   
    if (email === 'admin@example.com' && password === 'admin123') {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};