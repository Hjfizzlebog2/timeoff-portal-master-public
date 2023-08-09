import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ManagerLoginIcon() {
  return (
    <div className="App">
      <Box>
        <Link to={"/Manager Login"}>
          <Button sx={{ color: "white" }}>Login</Button>
        </Link>
      </Box>
    </div>
  );
}
