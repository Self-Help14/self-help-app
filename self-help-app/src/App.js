import React, { useState } from 'react';
import './App.css';
import GoalSetting from './components/GoalSetting';
import DailyPrompt from './components/DailyPrompt';
import HistoryScreen from './components/HistoryScreen';
import Chart from './components/Chart';

function App() {
  const [goals, setGoals] = useState([]);
  const [historicalData, setHistoricalData] = useState({
    'All Goals': [
      { date: '2024-08-01', score: 2 },
      { date: '2024-08-02', score: 3 },
      { date: '2024-08-03', score: 4 },
      // Additional sample data...
    ],
  });
  const [selectedGoal, setSelectedGoal] = useState('All Goals');
  const [timeScale, setTimeScale] = useState('All Time');

  const handleGoalSet = (goal) => {
    setGoals([...goals, goal]);
    setHistoricalData({
      ...historicalData,
      [goal.name]: [],  // Initialize historical data for the new goal
    });
  };

  const handleGoalSelect = (goalName) => {
    setSelectedGoal(goalName);
  };

  const handleTimeScaleChange = (e) => {
    setTimeScale(e.target.value);
  };

  // Filter data based on time scale
  const filteredData = historicalData[selectedGoal].filter((entry) => {
    const entryDate = new Date(entry.date);
    const now = new Date();
    if (timeScale === '1 Week') {
      return now - entryDate <= 7 * 24 * 60 * 60 * 1000;
    } else if (timeScale === '1 Month') {
      return now - entryDate <= 30 * 24 * 60 * 60 * 1000;
    } else if (timeScale === '6 Months') {
      return now - entryDate <= 182 * 24 * 60 * 60 * 1000;
    } else if (timeScale === '1 Year') {
      return now - entryDate <= 365 * 24 * 60 * 60 * 1000;
    } else {
      return true;  // 'All Time'
    }
  });

  return (
    <div className="container">
      <h1>Self-Help App</h1>
      <GoalSetting onGoalSet={handleGoalSet} />
      
      <div className="form-group">
        <label>Select a Goal:</label>
        <select value={selectedGoal} onChange={(e) => handleGoalSelect(e.target.value)}>
          <option value="All Goals">All Goals</option>
          {goals.map((goal, index) => (
            <option key={index} value={goal.name}>{goal.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Time Scale:</label>
        <select value={timeScale} onChange={handleTimeScaleChange}>
          <option value="1 Week">1 Week</option>
          <option value="1 Month">1 Month</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="All Time">All Time</option>
        </select>
      </div>

      <DailyPrompt />
      <HistoryScreen />
      <Chart data={filteredData} />
    </div>
  );
}

export default App;
