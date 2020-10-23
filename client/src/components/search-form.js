import React from 'react';

const SearchForm = ({ handleSubmit, handleChange, location }) => {
  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default SearchForm;
