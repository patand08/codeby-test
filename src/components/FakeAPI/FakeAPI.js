import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import { Divider } from "@mui/material";
import { useCartStore } from "../../zustand/zustand";
import over10 from "../../data/acima-10-reais.json";
import under10 from "../../data/abaixo-10-reais.json";

function fetchAPICart(json) {
  let loadData = JSON.parse(JSON.stringify(json));
  let tempCart = [];
  loadData.items.map((temItem) => {
    tempCart.push(temItem);
  });
  return tempCart;
}

function fetchAPITotal(json) {
  let loadData = JSON.parse(JSON.stringify(json));
  return loadData.value;
}

export default () => {
  //Zustand
  const setCartItems = useCartStore((state) => state.setCartItems);
  const setTotalValue = useCartStore((state) => state.setTotalValue);

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "70%", md: "50%", lg: "42%", xl: "35%" },
        borderRadius: 3,
      }}
    >
      <CardHeader
        title='Selecione a "API" a Ser Consultada'
        titleTypographyProps={{ variant: "h5" }}
        sx={{ textAlign: "center" }}
      />
      <Divider sx={{ borderBottomWidth: 2 }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "40%", fontWeight: "bold" }}
          onClick={() => {
            setCartItems(fetchAPICart(over10));
            setTotalValue(fetchAPITotal(over10));
          }}
        >
          Mais de R$ 10,00
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "40%", fontWeight: "bold" }}
          onClick={() => {
            setCartItems(fetchAPICart(under10));
            setTotalValue(fetchAPITotal(under10));
          }}
        >
          Menos de R$ 10,00
        </Button>
      </CardActions>
    </Card>
  );
};
