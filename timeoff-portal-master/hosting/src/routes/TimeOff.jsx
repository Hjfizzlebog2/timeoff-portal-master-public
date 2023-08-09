import React from "react";
import { palette } from "@mui/system";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const TimeOff = () => {
  return (
    <div>
      <Container maxWidth={"md"}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent={"center"}
          alignItems={"flex-start"}
          mt={8}
        >
          <Grid item width="100%">
            <Box sx={{ p: 2, backgroundColor: "text.secondary" }}>
              <Typography
                display={"flex"}
                justifyContent="center"
                variant="h3"
                color="white"
              >
                Time Off Request
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Employee Id Number</Typography>
          </Grid>
          <Grid item>
            <TextField label="Employee ID" type="number"></TextField>
          </Grid>
          <Grid item>
            <Typography variant="h4">Reason for the Request</Typography>
          </Grid>
          <Grid item>
            <RadioGroup>
              <FormControlLabel
                value="Vacation"
                label="Vacation"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Sick"
                label="Sick"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Bereavement"
                label="Bereavement"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Jury/Witness Duty"
                label="Jury/Witness Duty"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Personal Unpaid"
                label="Personal Unpaid"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Sick-COVID 19 Related"
                label="Sick-COVID 19 Related"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="LOA/FMLA"
                label="LOA/FMLA"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Other"
                label="Other"
                labelPlacement="end"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </Grid>
          <Grid item>
            <Typography variant="h4">Requested Day(s) off</Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"flex-start"}
            mt={2}
            ml={0}
          >
            <Grid item>
              <DatePicker label="First Date Off"></DatePicker>
            </Grid>
            <Grid item>
              <DatePicker label="Return Date"></DatePicker>
            </Grid>
            <Grid item>
              <TextField label="# of Scheduled Days" type="number"></TextField>
            </Grid>
            <Grid item>
              <TextField label="# of Scheduled Hours" type="number"></TextField>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">Empoloyee Certification</Typography>
          </Grid>
          <Grid item>
            <Typography>
              I understand that this request is subject to management approval
              and company policies
            </Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"flex-start"}
            mt={2}
            ml={0}
          >
            <Grid item>
              <TextField label="First Name"></TextField>
            </Grid>
            <Grid item>
              <TextField label="Last Name"></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems={"flex-start"}
            mt={2}
            ml={0}
            mb={5}
          >
            <Grid item>
              <FormControlLabel
                label="I agree to the use of an electronic signature"
                control={<Checkbox />}
              ></FormControlLabel>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TimeOff;
