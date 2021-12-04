import React, { createContext, useEffect, useState } from "react";
import database from "../database.json";

export const FilterStatesContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [filterState, setFilterState] = useState(false);
  const [size, setSize] = useState("all");
  const [brand, setBrand] = useState("all");
  const [gender, setGender] = useState("all");

  let products = database.products;
  let productsToRender;

  if (size === "all" && brand === "all" && gender === "all") {
    productsToRender = products
  }

  const value = { filterState, setFilterState, productsToRender };

  console.log("context => ", productsToRender);

  return (
    <FilterStatesContext.Provider value={value}>
      {children}
    </FilterStatesContext.Provider>
  );
};
