import React from "react";
import { Filter, ProductListing } from "./components";
import { FilterStatesProvider } from "./contexts/FilterStatesContext";
import { SortProvider } from "./contexts/SortContext";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBody}>
      <FilterStatesProvider>
        <SortProvider>
          <Filter />
          <ProductListing />
        </SortProvider>
      </FilterStatesProvider>
    </div>
  );
};

export default App;
