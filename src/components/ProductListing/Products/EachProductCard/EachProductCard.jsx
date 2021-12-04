import React from "react";

const EachProductCard = ({ eachItem }) => {
  console.log(eachItem)
  return (
    <div>
      <h1>{eachItem.productName}</h1>
      
    </div>
  );
};

export default EachProductCard;
