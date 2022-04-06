import React, { useState } from 'react';
import Home from "./Home"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import CaseRecord from './CaseRecord';
import Report from './Report';


export default function DashBoard() {

  const [flag, setflag] = useState("home");

  const data = [
    { id: 1, name: "User1", date: "18-04-2021" , time: "10.00 AM" },
    { id: 2, name: "User2", date: "18-04-2021", time: "12.00 PM" },
    { id: 3, name: "User3", date: "18-04-2021", time: "03.00 PM" },
    { id: 4, name: "User4", date: "21-04-2021", time: "11.00 AM" },
    { id: 5, name: "User5", date: "21-04-2021", time: "02.00 PM" },
    { id: 6, name: "User6", date: "21-04-2021", time: "04.00 PM" },
  ];

  const Logout = () => {
    alert("Logout");
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}  style={{marginBottom:30}}>
        <AppBar position="static"  >
          <Toolbar>
            <Typography variant="h6"  sx={{ flexGrow: 1 }}>
              LawHarbor
            </Typography>
            <Button color="inherit" onClick={() => setflag("home")}>Home</Button>
            <Button color="inherit" onClick={() => setflag("caserecord")}>Case Record</Button>
            <Button color="inherit" onClick={() => setflag("report")}>Report</Button>
            <a href="/Login"><Button color="error" onClick={() => Logout()}>Logout</Button></a>
          </Toolbar>
        </AppBar>
      </Box>
      {
        (() => {
          switch (flag) {
            case 'home':
              return <Home data={data} />
            case 'caserecord':
              return <CaseRecord />
            case 'report':
              return <Report />
            default:
              return null
          }
        })()
      }
    </>
  );
}//npm install @mui/material @emotion/react @emotion/styled
