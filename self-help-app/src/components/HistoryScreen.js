import React from 'react';

function HistoryScreen() {
  // Placeholder data for historical data
  const data = [
    { date: '2024-08-01', score: 2 },
    { date: '2024-08-02', score: 3 },
  ];

  return (
    <div>
      <h2>Historical Data</h2>
      <ul>
        {data.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryScreen;
