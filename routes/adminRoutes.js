const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.login);
router.post('/addMember', adminController.addMember);
router.put('/updateMember/:id', adminController.updateMember);
router.delete('/deleteMember/:id', adminController.deleteMember);
// Other admin routes...

module.exports = router;
