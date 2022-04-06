/*import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const pages = ['Home','Case Record','Report','Logout'];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function TopBar()  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.title}
          >
            LawHarbor
          </Typography>
          
        
          {pages.map((page) => (
                <Button color="inherit" >
               {page}
                </Button>
              ))      

          
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
};
export default TopBar;
*/