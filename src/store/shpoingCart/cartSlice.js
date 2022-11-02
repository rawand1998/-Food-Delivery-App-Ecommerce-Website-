import { createSlice } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action){
            const newItem = action.payload
            const existItem = state.cartItems.find(
                (item)=>item.id === newItem.id
            )
           state.totalQuantity++;
           if(!existItem){
            state.cartItems.push({
                id:newItem.id,
                title: newItem.title,
                image01: newItem.image01,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
            })
           }else{
            existItem.quantity++;
            existItem.totalPrice =
            Number(existItem.totalPrice) + Number(newItem.price);
           }

        }
    }
})