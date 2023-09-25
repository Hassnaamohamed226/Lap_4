import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../axios";

function ProDetails() {
  const { id } = useParams();
  
  const [productDetails, setproductDetails] = useState(undefined);

  useEffect(() => {
    getproductDetails();
  }, []);

  const getproductDetails = () => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setproductDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => err);
  };

  return (
    <>
      
      {productDetails ? (
        <>
        
        <div>
            {productDetails.images.slice(0, 4).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
          </div>

          <p>{productDetails.title}</p>;<p>{productDetails.description}</p>
          ;<p>{productDetails.category}</p>
        </>
      ) : (
        <p>loading</p>
      )}
     
    </>
  );
}

export default ProDetails;