
import React, { createContext, useReducer, useState } from 'react'
import cartReducer from '../reducer/cartReducer';

const CartContext = createContext(); 

export  { 
  CartContext
};

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}
export default function CartProvider(props) {
  let [state, dispatch] = useReducer(cartReducer, initialState)
  function addToCart(item) {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }
  function increment(id) {
    dispatch({type:'INCREMENT', payload: id})
  }

  function clearCart() {
    dispatch({type: 'CLEAR_CART'})
  }
  return (
   <CartContext.Provider value={{...state, addToCart, increment, clearCart}}>
    {props.children}
   </CartContext.Provider>
  )
}
