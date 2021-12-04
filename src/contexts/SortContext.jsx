import React, { createContext, useContext, useState } from "react";
import { FilterStatesContext } from "./FilterStatesContext";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState("");

  const handleSortChange = (sortBasedOnWhat) => {
    setSort((p) => sortBasedOnWhat);
  };

  const { productsToRender } = useContext(FilterStatesContext);
  let productsToRenderCopy = [...productsToRender];
  let productsToRenderAfterSort;

  if (sort === "") {
    productsToRenderAfterSort = productsToRender;
  }

  if (sort === "highToLow") {
    console.log(sort);

    productsToRenderAfterSort = productsToRenderCopy.sort((x, y) => {
      return Number(y.price) - Number(x.price);
    });
  }
  if (sort === "lowToHigh") {
    console.log(sort);

    productsToRenderAfterSort = productsToRenderCopy.sort(
      (x, y) => Number(x.price) - Number(y.price)
    );
  }

  const value = { productsToRenderAfterSort, handleSortChange };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
