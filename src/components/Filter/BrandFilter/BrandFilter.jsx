import React, {useContext} from "react";
import { FilterStatesContext } from '../../../contexts/FilterStatesContext';

const BrandFilter = () => {
    const { setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);
    
    const handleBrandChange = (e) => {
        setBrand(p => e.target.value);
    }
    
  return (
    <div>
      <label for="cars">Choose a Brand : </label>
      <select name="cars" id="cars" onChange={handleBrandChange}>
        <option value="Louis Vuitton">Louis Vuitton</option>
        <option value="Versace">Versace</option>
        <option value="Prada">Prada</option>
        <option value="all" selected>all</option>

      </select>
    </div>
  );
};

export default BrandFilter;
