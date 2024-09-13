import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
// @ts-ignore
import logo0 from "../assets/logo0.svg";
// @ts-ignore
import logo1 from "../assets/logo1.svg";
// @ts-ignore
import logo2 from "../assets/logo2.svg";

// header component
export const Header = () => {
  return (
    <>
      <Box
        sx={{ padding: "30px 40px", boxShadow: "0px 4px 8px 0px #0000001F" }}
      >
        <Grid2 container spacing={2}>
          <Grid2 xs={4}>
            <img
              src={logo0}
              alt="Logo"
              style={{ height: "51px", width: "51px" }}
            />
          </Grid2>

          <Grid2 xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo1}
              alt="Logo"
              style={{ height: "46px", width: "158px" }}
            />
          </Grid2>

          <Grid2
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src={logo2}
              alt="Logo"
              style={{ height: "14px", width: "14px" }}
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
