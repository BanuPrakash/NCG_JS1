export default function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                items: [...state.items, {...action.payload}],
                total: state.total + action.payload.price,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}