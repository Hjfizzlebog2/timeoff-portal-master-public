import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "../src/layouts/NavigationBar.jsx";
import { Navigate, Routes, Route, useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import TimeOff from "./routes/TimeOff.jsx";
import ManagerLogin from "./routes/ManagerLogin.jsx";
import ManagerApproval from "./routes/ManagerApproval.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { responsiveFontSizes, createTheme } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");

  function handleUserUpdate(user) {
    setUser(user);
  }

  var firebaseConfig = {
    apiKey: process.env.FB_CONFIG_API_KEY,
    authDomain: process.env.FB_CONFIG_APP_ID,
    projectId: process.env.FB_CONFIG_AUTH_DOMAIN,
    appId: process.env.FB_CONFIG_PROJECT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              {/* <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route> */}
              <Route element={<NavigationBar />}>
                <Route path="" element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Time Off Portal" element={<TimeOff />} />
                <Route
                  path="Manager Login"
                  element={<ManagerLogin handleUserUpdate={handleUserUpdate} />}
                />
                <Route
                  path="Manager Approval"
                  element={<ManagerApproval user={user} db={db} />}
                />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
