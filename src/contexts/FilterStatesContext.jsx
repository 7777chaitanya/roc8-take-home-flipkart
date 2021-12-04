import React, { createContext, useEffect, useState } from "react";
import database from "../database.json";

export const FilterStatesContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [size, setSize] = useState("all");
  const [brand, setBrand] = useState("all");
  const [gender, setGender] = useState("all");

  let products = database.products;
  // let productsToRender = products.filter(product => {
  //   return (product.size === size && product.gender === gender && product.brand === brand)
  // })

  let productsToRender = products;

  
  

  const value = { setSize, setBrand, setGender, productsToRender };

  console.log("context => ", productsToRender);

  return (
    <FilterStatesContext.Provider value={value}>
      {children}
    </FilterStatesContext.Provider>
  );
};
