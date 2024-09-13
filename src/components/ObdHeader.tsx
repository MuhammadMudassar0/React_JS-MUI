import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Divider from "@mui/material/Divider";
// @ts-ignore
import QRCode from '../assets/QRCode.svg';
// @ts-ignore
import header from "../assets/headerlogo.svg";

export const ObdHeader = () => {
  return (
    <>
      <Box sx={{ height: "56px", width: "351px" }}>
        <img src={header} alt="logo" width={250} />
      </Box>

      <Box sx={{ marginTop: "40px" }}>
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "600",
            fontFamily: "Outfit",
            color: "#212121",
          }}
        >
          2021 Toyota Corolla
        </Typography>
      </Box>


      <Grid2 container spacing={2}>

        <Grid2 xs={12} md={5}>
            <Box sx={{marginTop:'20px'}}>
                <Typography sx={{fontSize:'24px', fontWeight:600, fontFamily:'Outfit' }}>Vehicle Information</Typography>
                <Typography sx={{fontSize:'20px', fontWeight:400, fontFamily:'Outfit', marginTop:'14px'}}>--/ Toyota Corolla ? 203.943 - A 240/300 Sedan /</Typography>
                <Typography sx={{fontSize:'20px', fontWeight:400, fontFamily:'Outfit', marginTop:'14px'}}>VIN: WDD2040231B321432</Typography>
            </Box>
        </Grid2>

        <Grid2 xs={12} md={4}>

        <Typography sx={{fontSize:'20px', fontWeight:400, fontFamily:'Outfit' }}>
        Odometer Reading: 14000 km
        </Typography>
        <Typography sx={{fontSize:'20px', fontWeight:400, fontFamily:'Outfit' }}>
        License Plate:
        </Typography>
        </Grid2>
        <Grid2 xs={12} md={3}>
            <img src={QRCode} alt="QR Code"/>
            <Typography sx={{color:'#757575', fontSize:'16px', fontWeight:400, fontFamily:'Outfit'}}>Scan To Download.</Typography>
        </Grid2>


        <Grid2 xs={12}>
            <Box>
            <Typography sx={{fontSize:'24px', fontWeight:600, fontFamily:'Outfit' }}>Customer Information</Typography>
            <Typography sx={{color:'#212121', fontSize:'20px', fontWeight:400, fontFamily:'Outfit'}}>Name: </Typography>
            </Box>
        </Grid2>



        {/* Device Information section */}

        <Grid2 xs={12} md={6}>
            <Box sx={{marginTop:'24px'}}>
            <Typography sx={{fontSize:'24px', fontWeight:600, fontFamily:'Outfit' }}>Device Information</Typography>
            <Typography sx={{color:'#212121', fontSize:'20px', fontWeight:400, fontFamily:'Outfit'}}>Scanner: MaxiSys Ultra&ADAS&EV</Typography>
            <Typography sx={{color:'#212121', fontSize:'20px', fontWeight:400, fontFamily:'Outfit'}}>Version: V5.81.80</Typography>
            </Box>
        </Grid2>

        <Grid2 xs={12} md={6}>
            <Box sx={{marginTop:'24px'}}>
            <Typography sx={{fontSize:'20px', fontWeight:400, fontFamily:'Outfit' }}>Serial Number: V1DG00000166</Typography>
            <Typography sx={{color:'#212121', fontSize:'20px', fontWeight:400, fontFamily:'Outfit'}}>Repair Order Number: V1DG0000016620240708141134170</Typography>

            </Box>
        </Grid2>



        <Grid2 xs={12} md={6}>

        </Grid2>













      </Grid2>

    </>
  );
};