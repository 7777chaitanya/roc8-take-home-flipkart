import React, { useContext } from "react";
import useStyles from "./styles";
import { FilterStatesContext } from "../../contexts/FilterStatesContext";

const ProductListing = () => {
  const classes = useStyles();
  const { filterState, setFilterState } = useContext(FilterStatesContext);

  console.log("prod list => ", filterState);
  return <div className={classes.productListingBody}>ProductListing</div>;
};

export default ProductListing;
