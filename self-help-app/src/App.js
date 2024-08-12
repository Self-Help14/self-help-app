import React from 'react';
import GoalSetting from './components/GoalSetting';
import DailyPrompt from './components/DailyPrompt';
import HistoryScreen from './components/HistoryScreen';
import Chart from './components/Chart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Self-Help App</h1>
        <GoalSetting />
        <DailyPrompt />
        <HistoryScreen />
        <Chart />
      </header>
    </div>
  );
}

export default App;
