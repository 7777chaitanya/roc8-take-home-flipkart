import React, { createContext, useEffect, useState } from "react";

export const FilterStatesContext = createContext();

export const FilterStatesProvider = ({ children }) => {
  const [filterState, setFilterState] = useState(false);

  const value = { filterState, setFilterState };

  return (
    <FilterStatesContext.Provider value={value}>
      {children}
    </FilterStatesContext.Provider>
  );
};
