import express from 'express';
const router = express.Router();

import {
  createRequest,
  getAllRequests,
  updateRequestStatus
} from '../controllers/requestControllers.js';

// Create new request
router.post('/', createRequest);

// Get all requests
router.get('/', getAllRequests);

// Update request status
router.put('/:id/status', updateRequestStatus);

export default router;