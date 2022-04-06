import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Grid } from '@mui/material';
import Appoinmentlistcard from '../HomePageComponents/appointmentlist';


import Avatar from '@mui/material/Avatar';


const clickable = (e) => {
    var a = document.getElementById("grids");
    a.style.width = "1000px";
    var pop = document.getElementById("popup");
    pop.style.display = "block";
}



export default function Home(props) {
    return (
        <>
            <center>
                <Stack direction="row" >
                    <Grid container  spacing={2}>
                    <Grid  item xs={8}>
                        <Grid container id="grids">
                            {
                                props.data.map((user) => (
                                    <Grid item xs={4} key={user.id} sx={{ p: 2 }}>
                                        <Card sx={{ width: 250 }}>
                                            <CardActionArea>
                                                <CardContent>
                                                    <center>
                                                        <Avatar
                                                            alt="Remy Sharp"
                                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                            sx={{ width: 56, height: 56 }}
                                                            onClick={clickable}
                                                        />
                                                    </center>
                                                    <br />
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {user.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {user.date}
                                                        <br /><br />
                                                        {user.time}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid bgcolor={"#e3e3e3"} sx={{borderRadius: 8 }} item xs={4}>
                        <Typography gutterBottom variant="h5" component="div">
                            <h4>APPOINMENT LIST</h4>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Appoinmentlistcard></Appoinmentlistcard>
                            <Appoinmentlistcard></Appoinmentlistcard>
                            <Appoinmentlistcard></Appoinmentlistcard>
                        </Typography>
                    </Grid>
                </Grid>

            </Stack>
        </center>
        </>
    );
}
