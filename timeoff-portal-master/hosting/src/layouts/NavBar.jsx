import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Route, useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   list: {
//     width: 250,
//   },
// }));

export default function NavigationBar() {
  //const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleRouteChange = (path) => {
    history.push(path);
    handleDrawerClose();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
            <div
              className={classes.list}
              role="presentation"
              onClick={handleDrawerClose}
              onKeyDown={handleDrawerClose}
            >
              <List>
                <ListItem
                  button
                  key="Home"
                  onClick={() => handleRouteChange("/")}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  key="About"
                  onClick={() => handleRouteChange("/about")}
                >
                  <ListItemText primary="About" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <h3 className={classes.title}>My App</h3>
        </Toolbar>
      </AppBar>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </div>
  );
}
