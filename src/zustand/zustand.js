import create from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  totalValue: 0,

  setCartItems: (newCartItems) =>
    set({
      cartItems: newCartItems,
    }),

  setTotalValue: (value) =>
    set({
      totalValue: value,
    }),

  clearCart: () =>
    set({
      cartItems: [],
      totalValue: 0,
    }),
}));
