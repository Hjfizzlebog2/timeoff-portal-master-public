import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import "../styles/ManagerLogin.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { useState } from "react";

function ManagerLogin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const efChange = (event) => {
    setEmail(event.target.value);
  };

  const pfChange = (event) => {
    setPass(event.target.value);
  };

  function loginClick() {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        props.handleUserUpdate(user);
        return false;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        navigate("/Manager Login");
        return true;
      });
  }

  function loginClickHandler() {
    loginClick().then((error) => {
      if (!error) {
        navigate("/Manager Approval");
      }
    });
  }

  return (
    <div id="mLogin">
      <Container maxWidth={"md"}>
        <Grid container spacing={2} direction="column" alignContent={"center"}>
          <Grid item>
            <Typography sx={{ fontStyle: "italic" }}>
              *Login for Managers Only
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              autoComplete="true"
              placeholder="Email"
              label="Email"
              onChange={efChange}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              autoComplete="true"
              placeholder="Password"
              label="Password"
              type="password"
              onChange={pfChange}
            ></TextField>
          </Grid>
          <Grid item>
            <Grid container spacing={2} direction="row-reverse">
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  onClick={loginClickHandler}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ManagerLogin;
