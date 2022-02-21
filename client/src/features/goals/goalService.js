import axios from 'axios';

const API_URL = '/api/goals/';

//create goals
const createGoal = async (goalData, token) => {
  const res = await axios.post(API_URL, goalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

//get users all goals
const getGoals = async (token) => {
  const res = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

//delete users  goal
const deleteGoal = async (id, token) => {
  const res = await axios.delete(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
