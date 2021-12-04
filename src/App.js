import React from "react";
import { Filter, ProductListing } from "./components";
import { FilterStatesProvider } from "./contexts/FilterStatesContext";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBody}>
      <FilterStatesProvider>
        <Filter />
        <ProductListing />
      </FilterStatesProvider>
    </div>
  );
};

export default App;
