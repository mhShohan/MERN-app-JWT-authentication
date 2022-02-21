import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

export default function GoalForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText('');
  };
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Create new Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  );
}
