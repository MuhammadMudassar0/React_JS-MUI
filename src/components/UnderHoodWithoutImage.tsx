import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Divider, Typography } from "@mui/material";

export const UnderHoodWithoutImage = () => {
    return (
        <Box sx={{ background: '#FFFFFF', padding: '29px 20px', borderRadius: '6px', marginTop:'20px' }}>
            <Grid2 container spacing={2}>
                {/* left side  */}
                <Grid2 xs={12} md={6} >
                    <Typography sx={{ fontSize: '18px', fontFamily: 'Outfit', fontWeight: 600, color: '#212121' }}>
                        Underhood
                    </Typography>

                    <Divider sx={{ marginTop: '20px', width: '90%', background: '#D9D9D9' }} />
                </Grid2>


                {/* right side */}
                <Grid2 xs={12} md={6} >

                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Outfit', fontWeight: 600, color: '#212121' }}>
                            -------
                        </Typography>
                    </Box>

                    <Divider sx={{ marginTop: '20px', width: '100%', background: '#D9D9D9' }} />

                </Grid2>

                {/* description/table like section started here left side*/}

                <Grid2 xs={12} md={5.5}>

                    <Grid2 container sx={{ padding: '18px 3px' }}>

                        <Grid2 xs={6} sx={{ width: '50%' }} >
                            <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 500 }}>
                                Power seats, Window, Blind, Mirrors & Sunroof motors.
                            </Typography>

                        </Grid2>

                        <Grid2 xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                width: '50%'
                            }}
                        >

                            <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 700, color: '#4B174B' }}>
                                Dented
                            </Typography>

                        </Grid2>

                        <Divider sx={{ marginTop: '20px', width: '100%', background: '#D9D9D9' }} />

                        <Grid2 xs={6} sx={{ width: '50%', marginTop: '20px' }} >
                            <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 500 }}>
                                Power door locks
                            </Typography>

                        </Grid2>

                        <Grid2 xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                width: '50%',
                                marginTop: '20px'
                            }}
                        >

                            <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 700, color: '#4B174B' }}>
                                WORKING
                            </Typography>



                        </Grid2>
                        <Divider sx={{ marginTop: '20px', width: '100%', background: '#D9D9D9' }} />
                    </Grid2>

                </Grid2>

{/* left side ended here */}


            <Grid2 xs={12} md={6} mdOffset={0.5}>

            <Grid2 container sx={{ padding: '18px 3px' }}>

                <Grid2 xs={6} sx={{ width: '40%' }} >
                    <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 500 }}>
                        Power seats, Window, Blind, Mirrors & Sunroof motors.
                    </Typography>

                </Grid2>

                <Grid2 xs={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: '60%'
                    }}
                >

                    <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 700, color: '#4B174B' }}>
                        Dented
                    </Typography>

                </Grid2>

                <Divider sx={{ marginTop: '20px', width: '100%', background: '#D9D9D9' }} />

                <Grid2 xs={6} sx={{ width: '50%', marginTop: '20px' }} >
                    <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 500 }}>
                        Power door locks
                    </Typography>

                </Grid2>

                <Grid2 xs={6}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: '50%',
                        marginTop: '20px'
                    }}
                >

                    <Typography sx={{ fontSize: '13px', fontFamily: 'Outfit', fontWeight: 700, color: '#4B174B' }}>
                        WORKING
                    </Typography>



                </Grid2>
                <Divider sx={{ marginTop: '20px', width: '100%', background: '#D9D9D9' }} />
            </Grid2>

            </Grid2>

            </Grid2>
        </Box>
    )
}