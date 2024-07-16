
import React, { createContext, useReducer, useState } from 'react'
import cartReducer from '../reducer/cartReducer';
const CartContext = createContext(); 

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}
export default function CartProvider(props) {
  let [state, dispatch] = useReducer(cartReducer, initialState)

  return (
   <CartContext.Provider value={{...state}}>
    {props.children}
   </CartContext.Provider>
  )
}
