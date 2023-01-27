import React, { useEffect, useRef } from "react";
import { addProduct } from "../features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import "./DataForm.css";
import { useNavigate, useParams } from "react-router-dom";

const DataForm = (props) => {
  const dataNameRef = useRef();
  const dataDescriptionRef = useRef();
  const dataPriceRef = useRef();
  const dataQuantityRef = useRef();
  const dataImageRef = useRef();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const productarr = useSelector((state) => state.product.proarr);

  const { id } = useParams();
  const index = productarr.findIndex((el) => el.id == id);

  useEffect(() => {
    if (index >= 0) {
      const obj = productarr[index];
      dataNameRef.current.value = obj.Name;
      dataPriceRef.current.value = obj.price;
      dataQuantityRef.current.value = obj.quantity;
      dataImageRef.current.value = obj.imageUrl ? obj.imageUrl : "";
      dataDescriptionRef.current.value = obj.desctription
        ? obj.desctription
        : "";
    }
  }, [id]);

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
    console.log(index >= 0);
    if (index >= 0) {
      // productarr.splice(index, 1);
      const filterdarr = productarr.filter((el) => {
        return el.id !== id;
      });
      const nwobj = {
        id: productarr[index].id,
        Name,
        price: Price,
        quantity: Quantity,
        imageUrl: Image ? Image.trim() : undefined,
        Description: desctription ? desctription.trim() : undefined,
      };
      dispatch(addProduct([...filterdarr, nwobj]));
    } else {
      dispatch(
        addProduct({
          id: "id" + Math.random().toString(16).slice(2),
          Name,
          price: Price,
          quantity: Quantity,
          imageUrl: Image ? Image.trim() : undefined,
          Description: desctription ? desctription.trim() : undefined,
        })
      );
    }

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
