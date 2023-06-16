import express from 'express';
import controller from '../controllers/office-presence';
const router = express.Router();

router.get('/office-presence/day', controller.getDayPresence)
export = router;
