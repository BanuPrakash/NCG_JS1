import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    quantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(...action.payload);
            state.total = state.total + action.payload.amount
            state.quantity = quantity + 1
        },
        increment: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                    item.amount = item.price * item.quantity;
                }
            });
            state.total = state.items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
        },
        clearCart: (state) => {
            state.items = [],
                state.total = 0,
                state.quantity = 0
        },
    },
});

export const { addToCart, increment, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


