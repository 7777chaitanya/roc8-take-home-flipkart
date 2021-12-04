import React from "react";

const IdealForFilter = () => {
  return (
    <div>
      <label for="cars">Choose Gender : </label>
      <select name="cars" id="cars">
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
        <option value="all" selected>all</option>

      </select>
    </div>
  );
};

export default IdealForFilter;
