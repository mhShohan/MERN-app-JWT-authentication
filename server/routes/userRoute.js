const router = require('express').Router();
const {
    registerUser,
    getMe,
    loginUser,
    getAllUsers,
} = require('../controller/userController');
const { protect } = require('../middleweres/authMiddlewere');

//cheking porpuse
router.get('/', getAllUsers);
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
