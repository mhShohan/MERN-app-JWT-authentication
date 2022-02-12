//dependencies
const asyncHandler = require('express-async-handler');

const handler = {};

//@desc get goals
//@route GET /api/goals
//@access private
handler.getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals!' });
});

//@desc post goal
//@route POST /api/goals
//@access private
handler.setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Set Goals!' });
});

//@desc put goal
//@route PUT /api/goals/:id
//@access private
handler.updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Golas!' });
});

//@desc delete goal
//@route DELETE /api/goals/:id
//@access private
handler.deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'delete Golas!' });
});

module.exports = handler;
