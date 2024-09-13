import React  from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import { UnderHood } from "./UnderHood";
import { Electiral } from "./Electrial";
import { UnderHoodWithoutImage } from "./UnderHoodWithoutImage";

export const TableContainer = ()=> {
    return(
        <Box sx={{backgroundColor: '#f5f5f5', padding:'20px 36px'}}>
            <UnderHood />
            {/* 2nd table */}

            <UnderHoodWithoutImage />

            <Electiral />
        </Box>
    )
}