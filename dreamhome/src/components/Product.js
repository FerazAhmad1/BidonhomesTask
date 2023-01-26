import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/ProductSlice";
import { json } from "react-router-dom";

const Product = () => {
  const productarr = useSelector((state) => state.product.proarr);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("productarr")) {
      dispatch(addProduct(JSON.parse(localStorage.getItem("productarr"))));
    }
  }, []);
  return (
    <>
      {productarr.map((el) => (
        <div className="products">
          <img className="productImage" src={el.imageUrl} alt="drive image" />
          <div className="description">
            <p>{el.Name}</p>
            <p>{el.Description}</p>
            <p>{el.quantity}</p>
            <p>{el.price} $</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
