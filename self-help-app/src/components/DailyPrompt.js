import React, { useState } from 'react';
import '../App.css';  // Corrected path

function DailyPrompt() {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Daily rating:', rating);
  };

  return (
    <div className="form-group">
      <h2>Daily Rating</h2>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="How did you do today? (-5 to +5)"
      />
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

export default DailyPrompt;
