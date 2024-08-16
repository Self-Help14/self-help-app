import React, { useState } from 'react';
import '../App.css';

function GoalSetting({ onGoalSet }) {
  const [goalName, setGoalName] = useState('');
  const [goalColor, setGoalColor] = useState('#7289DA');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalName.trim() === '') {
      alert('Please enter a goal name.');
      return;
    }
    const newGoal = {
      name: goalName,
      color: goalColor,
    };
    onGoalSet(newGoal);  // Pass the goal data back to the parent component
    setGoalName('');  // Clear the input field after setting the goal
  };

  return (
    <div className="form-group">
      <h2>Set Your Goal</h2>
      <input
        type="text"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        placeholder="Enter your goal name"
      />
      <div>
        <label>Goal Color:</label>
        <input
          type="color"
          value={goalColor}
          onChange={(e) => setGoalColor(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Set Goal</button>
    </div>
  );
}

export default GoalSetting;
