const router = require('express').Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} = require('../controller/goalController');
const { protect } = require('../middleweres/authMiddlewere');

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
