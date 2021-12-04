import React, { createContext, useContext, useState } from "react";
import { FilterStatesContext } from "./FilterStatesContext";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState(null);

  const handleSortChange = (sortBasedOnWhat) => {
    setSort((p) => sortBasedOnWhat);
  };

  const { productsToRender } = useContext(FilterStatesContext);
  let productsToRenderAfterSort = productsToRender;

  if (sort === "highToLow") {
    console.log(sort);

    productsToRenderAfterSort = productsToRender.sort(
      (x, y) => { return Number(y.price) - Number(x.price)}
    );
  }
  if (sort === "lowToHigh") {
    console.log(sort);

    productsToRenderAfterSort = productsToRender.sort(
      (x, y) => Number(x.price) - Number(y.price)
    );
  }

  const value = { productsToRenderAfterSort, handleSortChange };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
