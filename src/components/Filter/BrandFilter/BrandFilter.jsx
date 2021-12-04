import React from "react";

const BrandFilter = () => {
  return (
    <div>
      <label for="cars">Choose a Brand : </label>
      <select name="cars" id="cars">
        <option value="Louis Vuitton">Louis Vuitton</option>
        <option value="Versace">Versace</option>
        <option value="Prada">Prada</option>
        <option value="all" selected>all</option>

      </select>
    </div>
  );
};

export default BrandFilter;
