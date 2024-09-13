import React from "react";

import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
// @ts-ignore
import carPic from "../assets/carImg.svg";
// @ts-ignore
import meter from "../assets/meter.svg";
// @ts-ignore
import petrol from "../assets/petrol.svg";
// @ts-ignore
import bars from "../assets/bars.svg";
// @ts-ignore
import man from "../assets/man.svg";

export const HeroSection = () => {
  return (
    <Box sx={{ padding: "30px 40px" }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6}>
          <Box>
            <img
              src={carPic}
              alt="Logo"
              style={{ width: "100%", }}
            />
          </Box>
        </Grid2>

        {/* 2nd row */}
        <Grid2 xs={12} md={6} sx={{padding: '30px 50px'}}> 
          {/* row for heading */}
          <Grid2 container>
            <Grid2 xs={12}>
              <Typography
                sx={{ fontWeight: 600, fontFamily: "Outfit", fontSize: "24px" }}
              >
                2021 Toyota Corolla
              </Typography>
            </Grid2>
          </Grid2>

          {/* row where we will show 4 icons  */}

          <Grid2
            container
            spacing={2}
            sx={{
              width: "354px",
              minWidth: "354px",
              maxWidth: "354px",
              marginTop: "35px",
            }}
          >
            <Grid2 xs={3}>
              <Box textAlign="center">
                <Box>
                  <img
                    src={meter}
                    alt="meter"
                    style={{ height: "14.75px", width: "20.8px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Outfit",
                      fontSize: "15px",
                      color: "#0000008A",
                    }}
                  >
                    14000 km
                  </Typography>
                </Box>
              </Box>
            </Grid2>

            {/* logo2 */}
            <Grid2 xs={3}>
              <Box textAlign="center">
                <Box>
                  <img
                    src={petrol}
                    alt="meter"
                    style={{ height: "14.75px", width: "20.8px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Outfit",
                      fontSize: "15px",
                      color: "#0000008A",
                    }}
                  >
                    Petrol
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            {/* logo3 */}
            <Grid2 xs={3}>
              <Box textAlign="center">
                <Box>
                  <img
                    src={bars}
                    alt="meter"
                    style={{ height: "14.75px", width: "20.8px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Outfit",
                      fontSize: "15px",
                      color: "#0000008A",
                    }}
                  >
                    Automatic
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            {/* logo4 */}
            <Grid2 xs={3}>
              <Box textAlign="center">
                <Box>
                  <img
                    src={man}
                    alt="meter"
                    style={{ height: "14.75px", width: "20.8px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Outfit",
                      fontSize: "15px",
                      color: "#0000008A",
                    }}
                  >
                    1st Owner
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>

          {/* row for inspection site heading */}
          <Grid2 container sx={{ marginTop: "70px" }}>
            <Grid2 xs={12}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Outfit",
                  fontSize: "13px",
                  color: "#0000008A",
                }}
              >
                Inspection Site
              </Typography>
            </Grid2>
          </Grid2>

          {/* row for inspection site subheading */}
          <Grid2 container>
            <Grid2 xs={12}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "Outfit",
                  fontSize: "15px",
                  color: "#000000DE",
                }}
              >
                PAC Riyadh, ABC, address de...
              </Typography>
            </Grid2>
          </Grid2>

          {/* row for inspection date heading */}
          <Grid2 container sx={{ marginTop: "30px" }}>
            <Grid2 xs={12}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Outfit",
                  fontSize: "13px",
                  color: "#0000008A",
                }}
              >
                Inspection Date
              </Typography>
            </Grid2>
          </Grid2>

          {/* row for inspection date subheading */}
          <Grid2 container>
            <Grid2 xs={12}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "Outfit",
                  fontSize: "15px",
                  color: "#000000DE",
                }}
              >
                20/05/2024
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
