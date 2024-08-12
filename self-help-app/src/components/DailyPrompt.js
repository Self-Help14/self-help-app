import React, { useState } from 'react';

function DailyPrompt() {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to save the daily rating
    console.log('Daily rating:', rating);
  };

  return (
    <div>
      <h2>Daily Rating</h2>
      <form onSubmit={handleSubmit}>
        <label>
          How did you do today? (-5 to +5)
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="-5"
            max="5"
            required
          />
        </label>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
}

export default DailyPrompt;
