const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

const controller = require('../controllers/customer');

router.get('/', authService.authozire, controller.get);
router.get('/:id', authService.authozire, controller.getById);
router.post('/', controller.post);
router.put('/:id', authService.authozire, controller.put);
router.delete('/:id', authService.authozire, controller.delete);
router.post('/authenticate', controller.authenticate);

module.exports = router;