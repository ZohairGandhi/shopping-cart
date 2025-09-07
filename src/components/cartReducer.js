export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add_to_cart": {
      const prod = action.prod;
      let isProdInCart = false;

      const newCart = cart.map((item) => {
        if (item.id === prod.id) {
          isProdInCart = true;
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      if (isProdInCart) {
        return newCart;
      }

      return [...newCart, { ...prod, quantity: 1 }];
    }

    case "increment_quantity": {
      return cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    }

    case "decrement_quantity": {
      const newCart = cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });

      return newCart.filter((item) => item.quantity > 0);
    }
  }
}
