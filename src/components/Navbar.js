import React from 'react';
import '../css/navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// pls del this line

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'primary.main',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Oswald',
    fontSize: '25px',
    textTransform: 'uppercase',
  },
  button: {
    flexGrow: 1,
    fontFamily: 'Merriweather',
    fontSize: '15px',
    textTransform: 'uppercase',
  },
  items: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: 'Merriweather',
    fontSize: '15px',
    textTransform: 'uppercase',
    marginLeft: '30px',
    height: '100%',
    alignSelf: 'center',
    justifyItems: 'center',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar bgcolor="primary.main">
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className={classes.items}>HOME</div>
            <div className={classes.items}>
              <Button
                variant="contained"
                color="secondary"
                href="#outlined-buttons"
              >
                <Typography variant="h6" className={classes.button}>
                  contact
                </Typography>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
