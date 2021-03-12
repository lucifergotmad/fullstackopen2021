import React from "react";

const Filter = ({ value, handleFilterChange }) => {
  return (
    <div>
      input : <input value={value} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
