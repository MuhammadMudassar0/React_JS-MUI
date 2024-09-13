import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
// @ts-ignore
import carLogo from "../assets/carLogo.svg";
// @ts-ignore
import settingIcon from "../assets/settingIcon.svg";
// @ts-ignore
import tick from "../assets/tick.svg";

export const ObdScanned = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "42px",
        }}
      >
        <Box sx={{ height: "56px", width: "65px" }}>
          <img src={carLogo} alt="logo" width={45} />
        </Box>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "35.28px",
          }}
        >
          System Scanned <span style={{ color: "#EE4D37" }}>( 56 )</span>
        </Typography>
      </Box>
      <br />
      <Grid2
        container
        columns={12}
        border="1px solid #E0E0E0"
        borderRadius="8px 8px 0px 0px"
      >
        <Grid2 xs={6} paddingRight="15px">
          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "35.28px",
                }}
                align="left"
              >
                System
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "35.28px",
                }}
                align="right"
              >
                Status
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                ECM(Engine Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="Settings Icon" />
                  <Typography sx={{ marginLeft: "20px" }}>4</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                TCM(Transmission Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>1</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          {/* <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                ESP(Electronic Stability Program Braking System)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick Icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                TPM(Tire Pressure Monitor Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>


          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2> */}

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

        </Grid2>
        <Grid2 xs={6} paddingRight="15px">

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "35.28px",
                }}
                align="left"
              >
                System
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "35.28px",
                }}
                align="right"
              >
                Status
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                ECM(Engine Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="Settings Icon" />
                  <Typography sx={{ marginLeft: "20px" }}>4</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                TCM(Transmission Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>1</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                ESP(Electronic Stability Program Braking System)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick Icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>
{/* 
          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                TPM(Tire Pressure Monitor Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>


          <Grid2
            columns={12}
            container
            padding="12px"
            sx={{ backgroundColor: "#F5F5F5" }}
          >
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                SRS(Supplemental Restraint System Control Unit)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={settingIcon} alt="setting icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 columns={12} container padding="12px">
            <Grid2 xs={10} display="flex">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="left"
              >
                KI(Instrument Cluster)
              </Typography>
            </Grid2>
            <Grid2 xs={2} display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "25.28px",
                }}
                align="right"
              >
                <Box sx={{ display: "flex" }}>
                  <img src={tick} alt="tick icon" />
                  <Typography sx={{ marginLeft: "20px" }}>0</Typography>
                </Box>
              </Typography>
            </Grid2>
          </Grid2> */}
          
        </Grid2>
      </Grid2>
    </>
  );
};
