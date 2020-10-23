import React from 'react';

const SearchForm = ({ handleSubmit, handleChange, location }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Look for place in the world 🌍</label>
      <input
        type="search"
        id="location"
        placeholder="Location"
        name="location"
        onChange={handleChange}
        value={location}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
