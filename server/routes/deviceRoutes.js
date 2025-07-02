import express from 'express';
import {
  getDevices,
  toggleDeviceStatus
} from '../controllers/deviceController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authenticateToken);

router.get('/', getDevices);
router.put('/:id/toggle', toggleDeviceStatus);

export default router;