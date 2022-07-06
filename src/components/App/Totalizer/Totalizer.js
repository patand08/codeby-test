import React from "react";
import { Typography, Paper } from "@mui/material";
import { numToBrl } from "../../../functions/moneyFormat";
import { useCartStore } from "../../../zustand/zustand";

export default () => {
  const totalValue = useCartStore((state) => state.totalValue);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Total
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          {numToBrl(totalValue)}
        </Typography>
      </div>
      {totalValue > 999 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#ccff90",
              textAlign: "center",
              borderRadius: 90,
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#558b2f", marginTop: "5px" }}
            >
              Parabéns, sua compra tem frete grátis!
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};
