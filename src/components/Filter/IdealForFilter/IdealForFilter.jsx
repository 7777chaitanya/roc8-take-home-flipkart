import React, {useContext} from "react";
import { FilterStatesContext } from '../../../contexts/FilterStatesContext';

const IdealForFilter = () => {
    const { setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);

    const handleGenderChange = (e) => {
        setGender(p => e.target.value)
    }
  return (
    <div>
      <label for="cars">Choose Gender : </label>
      <select name="cars" id="cars" onChange={handleGenderChange}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
        <option value="all" selected>all</option>

      </select>
    </div>
  );
};

export default IdealForFilter;
