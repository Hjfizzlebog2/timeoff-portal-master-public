import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import Drawer from "../components/Drawer";
import ManagerLoginIcon from "../components/ManagerLoginIcon";
import { Outlet } from "react-router";

export default function ButtonAppBar() {
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="absolute" sx={{ backgroundColor: "slategrey" }}>
          <Toolbar>
            <Drawer></Drawer>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              The Springs Health and Rehabilitation Portal
            </Typography>
            <ManagerLoginIcon></ManagerLoginIcon>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Outlet></Outlet>
    </>
  );
}
