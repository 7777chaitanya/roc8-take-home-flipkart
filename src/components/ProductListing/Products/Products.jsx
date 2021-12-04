import React, { useContext } from "react";
import { FilterStatesContext } from "../../../contexts/FilterStatesContext";
import EachProductCard
 from "./EachProductCard/EachProductCard";
const Products = () => {
  const { filterState, setFilterState, productsToRender } =
    useContext(FilterStatesContext);
  console.log("proudctssss", productsToRender);
  return (
    <div>
      {productsToRender?.map((eachItem) => (
        <EachProductCard eachItem={eachItem} />
      ))}
    </div>
  );
};

export default Products;
