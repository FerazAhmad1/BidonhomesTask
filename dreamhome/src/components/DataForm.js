import React, { useRef } from "react";
import { addProduct } from "../features/ProductSlice";
import { useDispatch } from "react-redux";
import "./DataForm.css";
import { useNavigate } from "react-router-dom";

const DataForm = (props) => {
  const dataNameRef = useRef();
  const dataDescriptionRef = useRef();
  const dataPriceRef = useRef();
  const dataQuantityRef = useRef();
  const dataImageRef = useRef();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const dataSaveHandler = (e) => {
    e.preventDefault();
    const Name = dataNameRef.current.value;
    const Price = dataPriceRef.current.value;
    const Quantity = dataQuantityRef.current.value;
    const Image = dataImageRef.current.value;
    const desctription = dataDescriptionRef.current.value;
    console.log(Name, "name", Price, "Price", Quantity);
    if (!Name.trim() || !Price || !Quantity) {
      alert("please fill all the reqired field at least");
      return;
    }
    dispatch(
      addProduct({
        Name,
        price: Price,
        quantity: Quantity,
        imageUrl: Image ? Image.trim() : undefined,
        Description: desctription ? desctription.trim() : undefined,
      })
    );
    props.onClick();
    navigator("/mainpage");
  };

  return (
    <div>
      <form className="dataform">
        <div className="dataform__required">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            className="dataform__input"
            ref={dataNameRef}
          />
          <p className="dataform__required__input">required*</p>
        </div>

        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          className="dataform__input"
          ref={dataDescriptionRef}
        />

        <div className="dataform__required">
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            className="dataform__input"
            ref={dataPriceRef}
          />
          <p className="dataform__required__input">required*</p>
        </div>
        <div className="dataform__required">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="quantity"
            className="dataform__input"
            ref={dataQuantityRef}
          />
          <p className="dataform__required__input">required*</p>
        </div>

        <label>Image</label>
        <input
          type="url"
          placeholder="image url"
          className="dataform__input"
          ref={dataImageRef}
        />

        <button onClick={dataSaveHandler} className="dataform__btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default DataForm;
