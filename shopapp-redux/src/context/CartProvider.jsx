
import React, { createContext, useReducer, useState } from 'react'
import cartReducer from '../reducer/cartReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export {
  CartContext
};

const initialState = {
  items: [],
  total: 0,
  quantity: 0
}
export default function CartProvider(props) {
  let [state, dispatch] = useReducer(cartReducer, initialState)
  let navigate = useNavigate();
  function addToCart(item) {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }
  function increment(id) {
    dispatch({ type: 'INCREMENT', payload: id })
  }

  function clearCart() {
    let order = {};
    // window.sessionStorage.setItem("user", "banu@gmail.com");
    order.customer = window.sessionStorage.getItem("user");
    order.orderDate = new Date();
    order.items = state.items;
    order.total = state.total;

    axios.post("http://localhost:9999/orders", order).then(response => {
      console.log("Order placed!!");
      dispatch({ type: 'CLEAR_CART' })
      navigate("/");
    })

  }
  return (
    <CartContext.Provider value={{ ...state, addToCart, increment, clearCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
