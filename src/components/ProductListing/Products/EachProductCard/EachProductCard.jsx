import React from "react";
import useStyles from "./styles";

const EachProductCard = ({ eachItem }) => {
  console.log(eachItem);
  const classes = useStyles();
  return (
    <div className={classes.eachItemDiv}>
      <div className={classes.productImageDiv}>
        <img src={eachItem.productImageUrl} alt={eachItem.productName} className={classes.productImage}/>
      </div>
      <div className={classes.productDetailsAndPriceDiv}>
        <h6>{eachItem.originalPrice}</h6>
      </div>
    </div>
  );
};

export default EachProductCard;
