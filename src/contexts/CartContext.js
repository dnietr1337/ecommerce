import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((acc, currentItem) => {
      return acc + currentItem.amount * currentItem.price;
    }, 0);
    setTotal(total);
  }, [cart]);

  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    addToCart(cartItem);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount === 1) return removeFromCart(id);

    const newCart = [...cart].map((item) => {
      if (item === cartItem) return { ...item, amount: item.amount - 1 };
      return item;
    });

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
