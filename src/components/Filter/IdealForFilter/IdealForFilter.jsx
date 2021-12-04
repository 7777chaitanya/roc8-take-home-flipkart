import React, { useContext, useRef, useEffect} from "react";
import { FilterStatesContext } from "../../../contexts/FilterStatesContext";

const IdealForFilter = () => {
  const { gender, setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);

  const filterRef = useRef(null);

  useEffect(() => {
    filterRef.current.value = gender;
  }, [gender]);
  const handleGenderChange = (e) => {
    setGender((p) => e.target.value);
  };
  return (
    <div>
      <label for="cars">Choose Gender : </label>
      <select
        name="cars"
        id="cars"
        onChange={handleGenderChange}
        ref={filterRef}
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
        <option value="all" selected>
          all
        </option>
      </select>
    </div>
  );
};

export default IdealForFilter;
