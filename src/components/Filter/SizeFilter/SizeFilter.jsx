import React from "react";

const SizeFilter = () => {
  return (
    <div>
      <label for="cars">Choose Size : </label>
      <select name="cars" id="cars">
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
        <option value="all" selected>all</option>
      </select>
    </div>
  );
};

export default SizeFilter;
