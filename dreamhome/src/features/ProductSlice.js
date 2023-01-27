import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  proarr: JSON.parse(localStorage.getItem("productarr")) || [
    {
      id: "hello",
      Name: "usa-bunglow",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1FAW0exyXqfpd88BmEx0xg-ntAcL3NycA",
      Description: "A comfotable Home with genuine price",
      price: 50,
      quantity: 4,
    },
    {
      id: "Hi",
      Name: "Feraz House",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1-vOhCwyrGSAOj30_lMpv9q30FAgwL32G",
      Description: "Very good House",
      price: 1.5,
      quantity: 1,
    },
  ],
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.proarr = action.payload;
      } else {
        state.proarr.push(action.payload);
      }

      localStorage.setItem("productarr", JSON.stringify(state.proarr));
    },
  },
});

export default ProductSlice.reducer;

export const { addProduct } = ProductSlice.actions;
