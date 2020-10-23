import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {};

  return (
    <>
      <h1>Weather forecast</h1>
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="search"
          id="location"
          placeholder="Search weather"
          name="location"
          onChange={handleChange}
          value={location}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;
