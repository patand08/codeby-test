import React from "react";
import Cart from "../Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FakeAPI from "../FakeAPI/FakeAPI";
import { useCartStore } from "../../zustand/zustand";

const codeBy = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

export default () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <ThemeProvider theme={codeBy}>
      <div
        style={{
          position: "fixed",
          padding: 0,
          margin: 0,
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#cdd6e8",
        }}
      >
        {cartItems.length === 0 && <FakeAPI />}
        {cartItems.length !== 0 && <Cart />}
      </div>
    </ThemeProvider>
  );
};
