//dependencies
const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

const handler = {};

//@desc get goals
//@route GET /api/goals
//@access private
handler.getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

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

    const goal = await Goal.create({ text: req.body.text });

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
    await goal.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = handler;
