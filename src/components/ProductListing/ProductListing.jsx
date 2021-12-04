import React, { useContext } from "react";
import useStyles from "./styles";
import { FilterStatesContext } from "../../contexts/FilterStatesContext";
import Products from "./Products/Products";

const ProductListing = () => {
  const classes = useStyles();
  const { filterState, setFilterState, productsToRender } =
    useContext(FilterStatesContext);
  console.log("produtlisting => ", productsToRender);

  console.log("prod list => ", filterState);
  return (
    <div className={classes.productListingBody}>
      <Products />
    </div>
  );
};

export default ProductListing;
