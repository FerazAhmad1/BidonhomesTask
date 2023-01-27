import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/ProductSlice";
import { Link } from "react-router-dom";
import { json } from "react-router-dom";

const Product = (props) => {
  const productarr = useSelector((state) => state.product.proarr);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("productarr")) {
      dispatch(addProduct(JSON.parse(localStorage.getItem("productarr"))));
    }
  }, []);

  const getSortedProducts = () => {
    if (Array.isArray(props.searchBy)) {
      return props.searchBy;
    }
    const arr = [...productarr];
    if (props.sortBy.length == 1) {
      return arr.sort((a, b) => {
        return a[props.sortBy[0]] - b[props.sortBy[0]];
      });
    }
    if (props.sortBy.length == 2) {
      return arr.sort((a, b) => {
        return a.price - b.price || a.quantity - b.quantity;
      });
    }

    return productarr;
  };
  return (
    <>
      {console.log("i am running")}
      {getSortedProducts().map((el) => (
        <Link to={`/dataform/${el.id}`}>
          <div className="products">
            <img className="productImage" src={el.imageUrl} alt="drive image" />
            <div className="description">
              <p>{el.Name}</p>
              <p>{el.Description}</p>
              <p>{el.quantity}</p>
              <p>{el.price} $</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Product;
