import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { FilterStatesContext } from "../../../contexts/FilterStatesContext";
import EachProductCard from "./EachProductCard/EachProductCard";

const Products = () => {
  const { setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);
  console.log("proudctssss", productsToRender);
  return (
    <div>
      <Grid container>
        {productsToRender?.map((eachItem) => (
          <Grid item sm={4}>
            <EachProductCard eachItem={eachItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
