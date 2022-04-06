import React from "react";
import { CardActionArea,Container, Stack, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function Appoinmentlistcard() {
    return (
        <>
        <Container >
        <Stack direction="row" bgcolor={"#d0def2"}  sx={{ marginBottom:2, padding:2, borderRadius: 2 }} spacing={3}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        sx={{ width: 30, height: 30 }}
                    />
                    <p>User</p>
                    <p>2022-06-30</p>
                    <p>04:00 pm</p>
                    <span style={{fontSize:25}} >✅</span>
                    <span style={{fontSize:25}} >❌</span>
                </Stack>
        </Container>

        </>
    )
}

export default Appoinmentlistcard;
