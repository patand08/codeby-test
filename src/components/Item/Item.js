import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { numToBrl } from "../../functions/moneyFormat";

export default (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="square"
          alt={props.itemName}
          src={props.imageUrl}
          sx={{
            width: "8rem",
            height: "8rem",
            border: 2,
            borderColor: "#e0e0e0",
          }}
        />
        <div style={{ flexGrow: 1, paddingLeft: "1.5rem" }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            {props.itemName} x{props.qt}
          </Typography>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{ opacity: "0.5", marginBottom: 0 }}
          >
            {numToBrl(props.listPrice)}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {numToBrl(props.sellingPrice * props.qt)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
