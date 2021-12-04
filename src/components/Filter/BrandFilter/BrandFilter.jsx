import React, { useContext, useRef, useEffect } from "react";
import { FilterStatesContext } from "../../../contexts/FilterStatesContext";

const BrandFilter = () => {
  const { brand, setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);

  const filterRef = useRef(null);

  useEffect(() => {
    filterRef.current.value = brand;
  }, [brand]);

  const handleBrandChange = (e) => {
    // console.log("<<<>>>", filterRef.current.value);
    setBrand((p) => e.target.value);
  };

  return (
    <div>
      <label for="cars">Choose a Brand : </label>
      <select
        name="cars"
        id="cars"
        onChange={handleBrandChange}
        ref={filterRef}
      >
        <option value="Louis Vuitton">Louis Vuitton</option>
        <option value="Versace">Versace</option>
        <option value="Prada">Prada</option>
        <option value="all" selected>
          all
        </option>
      </select>
    </div>
  );
};

export default BrandFilter;
