export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                items: [...state.items, { ...action.payload }],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            let its = state.items;
            its.forEach(item => {
                if (item.id === action.payload) {
                    item.quantity = item.quantity + 1
                    item.amount = item.price * item.quantity
                }
            });

            return {
                items: its,
                total: its.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0),
                quantity: state.quantity
            };
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
