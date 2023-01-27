import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/ProductSlice";
import Button from "./Button";
import Product from "./Product";
import { useState } from "react";
import DataForm from "./DataForm";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [form, setForm] = useState(false);
  const [searchString, setString] = useState("");
  const [searcharr, setSearcharr] = useState("");
  const [sortBy, setSortBy] = useState([]);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const productarr = useSelector((state) => state.product.proarr);

  const navigator = useNavigate();
  console.log(authState);

  const logoutHandler = () => {
    localStorage.clear();
    navigator("/");
  };
  const sortHandler = (e) => {
    if (e.target.checked) {
      setSortBy([...sortBy, e.target.value]);
    } else {
      setSortBy(sortBy.filter((el) => el !== e.target.value));
    }
  };
  const formAppear = () => {
    setForm((prevState) => !prevState);
    navigator("/dataform/5");
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    setString(e.target.value);
  };

  useEffect(() => {
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    const serchtimeout = setTimeout(() => {
      const arr = productarr.filter((el) => {
        console.log("yesssssssssssssssssssssss");
        console.log(el.Name.includes(searchString.trim()));
        return el.Name.includes(searchString.trim());
      });
      setSearcharr(arr);
    }, 500);

    return () => {
      clearTimeout(serchtimeout);
    };
  }, [searchString]);

  let UI = (
    <div className="mainPageContainer">
      <div className="header">
        <h4 className="name">{authState.userName}</h4>
        <Button onClick={logoutHandler} className="logoutbtn">
          LogOut
        </Button>
      </div>
      <div className="addoroduct__btn">
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={sortHandler}
            type="checkbox"
            name="price"
            value="price"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            onChange={sortHandler}
            type="checkbox"
            name="quantity"
            value="quantity"
          />
        </div>

        <Button onClick={formAppear} className="add-product">
          Add Product
        </Button>
      </div>
      <div className="searchBar">
        <input
          placeholder="search..."
          className="serachInput "
          onChange={searchHandler}
        />
      </div>
      <div className="allProducts">
        <Product sortBy={sortBy} searchBy={searcharr} />
      </div>
    </div>
  );
  console.log(sortBy);
  return <>{UI}</>;
};

export default MainPage;
