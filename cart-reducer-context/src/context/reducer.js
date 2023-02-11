const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "REMOVE") {
    const newItems = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newItems,
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount >= 1),
    };
  }

  if (action.type === "GET_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount;
        cartTotal.total += cartItem.amount * cartItem.price;
        return cartTotal;
      },
      { amount: 0, total: 0 }
    );
    return {
      ...state,
      total,
      amount,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }

  return state;
};

export default reducer;
