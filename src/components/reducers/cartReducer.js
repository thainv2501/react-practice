export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.product.id !== action.payload.id),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.product.id === action.payload.id
            ? (c.quantity = action.payload.qty)
            : c.quantity
        ),
      };
    default:
      break;
  }
};
