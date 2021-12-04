import React, { createContext, useEffect, useState } from "react";
import database from "../database.json";

export const FilterStatesContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [filterState, setFilterState] = useState(false);
  let productsToRender = database.products;

  const value = { filterState, setFilterState, productsToRender };

  console.log("context => ", productsToRender);

  return (
    <FilterStatesContext.Provider value={value}>
      {children}
    </FilterStatesContext.Provider>
  );
};
