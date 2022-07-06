import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Item from "../Item/Item";
import Totalizer from "../App/Totalizer/Totalizer";
import { useCartStore } from "../../zustand/zustand";

export default () => {
  const clearCart = useCartStore((state) => state.clearCart);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "70%", md: "50%", lg: "42%", xl: "35%" },
        borderRadius: 3,
      }}
    >
      <CardHeader
        title="Meu Carrinho"
        titleTypographyProps={{ variant: "h5" }}
        sx={{ textAlign: "center" }}
      />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <div style={{ padding: "1.5rem" }}>
        <Stack spacing={3} sx={{ maxHeight: "50vh", overflow: "auto" }}>
          {cartItems.map((item) => {
            return (
              <Item
                key={item.uniqueId}
                itemName={item.name}
                listPrice={item.listPrice}
                sellingPrice={item.sellingPrice}
                qt={item.quantity}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </Stack>
      </div>

      <Divider sx={{ borderBottomWidth: 2 }} />
      <div style={{ padding: "1.5rem" }}>
        <Totalizer />
      </div>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "100%", fontWeight: "bold" }}
          onClick={() => {
            clearCart();
          }}
        >
          Finalizar compra
        </Button>
      </CardActions>
    </Card>
  );
};
