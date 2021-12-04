import React, { createContext, useEffect, useState } from "react";
import database from "../database.json";

export const FilterStatesContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [size, setSize] = useState("all");
  const [brand, setBrand] = useState("all");
  const [gender, setGender] = useState("all");

  const handleClearFilters = () => {
    setSize(p => "all");
    setBrand(p => "all");
    setGender(p => "all");
  }

  

  let products = database.products;
  let productsToRender;
  if (size === "all" && brand === "all" && gender === "all") {
    productsToRender = products;
  } else {
    let localProducts = products;
    if (size !== "all") {
      localProducts = localProducts.filter((eachItem) => {
        return eachItem.size === size;
      });
    }

    if (gender !== "all") {
      localProducts = localProducts.filter((eachItem) => {
        return eachItem.gender === gender;
      });
    }

    if (brand !== "all") {
      localProducts = localProducts.filter((eachItem) => {
        return eachItem.brand === brand;
      });
    }

    productsToRender = localProducts;
  }

  // let productsToRender = products;
  console.log("sbg => ", size, brand, gender);

  const value = { size, brand, gender, setSize, setBrand, setGender, productsToRender,handleClearFilters };

  console.log("context => ", productsToRender);

  return (
    <FilterStatesContext.Provider value={value}>
      {children}
    </FilterStatesContext.Provider>
  );
};
