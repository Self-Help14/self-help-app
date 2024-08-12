import React, { useState } from 'react';

function GoalSetting() {
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to save the goal
    console.log('Goal set:', goal);
  };

  return (
    <div>
      <h2>Set Your First Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your goal"
          required
        />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default GoalSetting;
