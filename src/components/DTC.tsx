import React from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// @ts-ignore
import dtc from "../assets/dtcIcon.svg";

export const DTC = () => {
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
          <img src={dtc} alt="logo" width={45} />
        </Box>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "35.28px",
          }}
        >
          DTC <span style={{ color: "#EE4D37" }}>( 13 )</span>
        </Typography>
      </Box>
      <br />

      <Box
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
          marginTop: "20px",
          padding: "0px",
        }}
      >
        <Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ background: "#F5F5F5", padding: "10px 0px" }}
        >
          {/* Left side */}
          <Grid2 xs={12}>
            <Typography
              sx={{
                fontSize: "28px",
                fontFamily: "Outfit",
                fontWeight: "600",
                color: "#4C0055",
                padding: "12px",
              }}
            >
              ECM(Engine Control Unit){" "}
              <span style={{ color: "#EE4D37" }}>( 4 DTCs )</span>
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={6}>
            <Box
              sx={{ padding: "20px", display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  DTC:
                </span>{" "}
                0009{" "}
              </Typography>
            </Box>

            <Box
              sx={{ padding: "20px", display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  Description:
                </span>{" "}
                Description: Implausible data were received from the air
                conditioning.{" "}
              </Typography>
            </Box>

            <Box
              sx={{ padding: "20px", display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  Status:
                </span>{" "}
                Active and stored(Event codes).{" "}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 xs={12} md={6}>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  DTC:
                </span>{" "}
                0009{" "}
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  Description:
                </span>{" "}
                Description: the air conditioning.{" "}
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#212121",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#757575",
                  }}
                >
                  Status:
                </span>{" "}
                Active and stored(Event codes).{" "}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 container spacing={0}>
            <Grid2 xs={12} md={6}>
              <Box sx={{ background: "#F5F5F5" }}>
                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      DTC:
                    </span>{" "}
                    0009{" "}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      Description:
                    </span>{" "}
                    Description: Implausible data were received from the air
                    conditioning.{" "}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      Status:
                    </span>{" "}
                    Active and stored(Event codes).{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid2>

            <Grid2 xs={12} md={6}>
              <Box sx={{ background: "#F5F5F5" }}>
                <Box
                  sx={{
                    padding: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      DTC:
                    </span>{" "}
                    0009{" "}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      Description:
                    </span>{" "}
                    Description: the air conditioning.{" "}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      color: "#212121",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        color: "#757575",
                      }}
                    >
                      Status:
                    </span>{" "}
                    Active and stored(Event codes).{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
