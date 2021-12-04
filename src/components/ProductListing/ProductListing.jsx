import React, { useContext } from "react";
import useStyles from "./styles";
import Products from "./Products/Products";
import { SortContext } from "../../contexts/SortContext";
import Sort from "../Sort/Sort";

const ProductListing = () => {
  const classes = useStyles();
  const { productsToRenderAfterSort } = useContext(SortContext);

  console.log("produtlisting => ", productsToRenderAfterSort);

  return (
    <div className={classes.productListingBody}>
      <Sort />
      <Products />
    </div>
  );
};

export default ProductListing;
