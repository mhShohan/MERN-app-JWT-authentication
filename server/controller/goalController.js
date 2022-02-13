//dependencies
const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

const handler = {};

//@desc get goals
//@route GET /api/goals
//@access private
handler.getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json(goals);
});

//@desc post goal
//@route POST /api/goals
//@access private
handler.setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Must provide a Text');
    }

    const goal = await Goal.create({ text: req.body.text, user: req.user.id });

    res.status(200).json(goal);
});

//@desc put goal
//@route PUT /api/goals/:id
//@access private
handler.updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found!');
    }

    // check for user
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found!');
    }

    // make sure the loggen in user match the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized!');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
});

//@desc delete goal
//@route DELETE /api/goals/:id
//@access private
handler.deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found!');
    }

    // check for user
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found!');
    }

    // make sure the loggen in user match the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized!');
    }

    await goal.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = handler;
