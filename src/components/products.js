import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./product.css";
const ProductsList = (props) => {
  return (
    <div className="card shadow-lg " style={{ width: "18rem" }}>
      <img src={props.pimage} alt="product" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{`title ${props.ptitle}`}</h5>
        <p className="card-text">{`description ${props.pdescription}`}</p>
      </div>
    </div>
  );
};
export default ProductsList;

/* <div>
     <img src={products.thumbnail} alt="product"/>
     <p>{`title ${products.title}`}</p>
     <p>{`category ${products.category}`}</p>
     <p>{`price ${products.price}`}</p>
     <p>{`description ${products.description}`}</p>
   </div> */
