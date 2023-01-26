import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Product from "./Product";
import { useState } from "react";
import DataForm from "./DataForm";
import "./MainPage.css";

const MainPage = () => {
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);

  const logoutHandler = () => {
    localStorage.removeItem(authState.userEmail);
  };

  const formAppear = () => {
    setForm((prevState) => !prevState);
  };
  let UI;
  if (form) {
    UI = <DataForm onClick={formAppear} />;
  } else {
    UI = (
      <div className="mainPageContainer">
        <div className="header">
          <h4 className="name">Feraz Khan</h4>
          <Button onClick={logoutHandler} className="logoutbtn">
            LogOut
          </Button>
        </div>
        <div className="addoroduct__btn">
          <Button onClick={formAppear}>Add Product</Button>
        </div>
        <div className="searchBar">
          <input className="serach Input " />
        </div>
        <div className="allProducts">
          <Product />
        </div>
      </div>
    );
  }
  return <>{UI}</>;
};

export default MainPage;
