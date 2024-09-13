import { Box } from "@mui/material";
import React from "react";
import { ObdHeader } from "./ObdHeader";
import { ObdScanned } from "./OBDScanned";
import { DTC } from "./DTC";


export const OBDReport = () => {
    return(
        <Box sx={{padding:'60px 145px'}}>
            <ObdHeader />
            <ObdScanned />
            <DTC />
        </Box>
    )
}