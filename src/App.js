import React from "react";
import { Filter, ProductListing } from "./components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBody}>
      <Filter />
      <ProductListing />
    </div>
  );
};

export default App;
