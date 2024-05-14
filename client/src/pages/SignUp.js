import React, { useState } from "react";
import backgroundImage from "../assets/background1.jpg";
import left_image from "../assets/file_sharing2.jpg";
import left_image2 from "../assets/signup.avif";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  Stack,
  Card,
  CardMedia,
} from "@mui/material";
import axios from "axios";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  all: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fffff",
    backgroundImage:
      "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);",
    // backgroundImage: `url(${backgroundImage})`,
  },
  signupBox: {
    // backgroundColor: 'grey',
    width: "60%",
    height: "60%",
    boxShadow: "0.3rem 0.3rem 0.6rem grey",
    // borderRadius: 25,
    paddingRight: "1rem",
    backgroundColor: "#ffffff",

    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-evenly",
  },
  signup1: {
    textAlign: "center",
    fontSize: "3rem !important",
    fontWeight: "bold",
    // borderRadius: 4,
    padding: "1rem",

    // marginBottom: "0.1rem"
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: 20,
    // backgroundColor: "transparent",
    backgroundColor: "#ffffff",
  },
  inputField: {
    "& input:-webkit-autofill": {
      "-webkit-box-shadow":
        "0 0 0 30px white inset !important" /* Override Chrome's autofill background color */,
    },
  },
});

const SignUp = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Boolean(firstName) &&
      Boolean(lastName) &&
      Boolean(email) &&
      Boolean(password) &&
      Boolean(confirmPassword) &&
      password.length > 7 &&
      password === confirmPassword
    ) {
      console.log(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        password.length
      );
      try {
        const username = firstName + " " + lastName;
        const response = await axios.post(
          "http://localhost:4000/auth/createUser",
          {
            username,
            email,
            password,
            confirmPassword,
          }
        );
        console.log("New user is created:", response.data);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
        // You can redirect the user to the newly created post or update the post list
      } catch (error) {
        console.error("Error creating a user:", error);
      }
    } else {
      console.log("Error, invalid signup data ");
    }
  };

  return (
    <Box className={classes.all}>
      <Stack gap={2} className={classes.signupBox}>
        <Card sx={{ width: "50%" }}>
          {/* <CardMedia
            component="img"
            // height="300"
            image={left_image}
            alt="Paella dish"
          /> */}
          <CardMedia
            component="img"
            // height="300"
            image={left_image2}
            alt="Paella dish"
          />
        </Card>

        <Box sx={{ width: "50%" }}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Stack gap={2}>
              <Typography className={classes.signup1}>SignUp</Typography>
              <TextField
                required
                label="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
              <TextField
                required
                label="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
              <TextField
                className={classes.inputField}
                required
                type="email"
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <FormControl required>
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="filled-adornment-password2"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl required>
                <InputLabel htmlFor="filled-adornment-password">
                  Confirm Password
                </InputLabel>
                <FilledInput
                  value={confirmPassword}
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  id="filled-adornment-password"
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  // backgroundColor: "red",
                  width: "50%",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ alignItems: "center", width: "100%" }}
                >
                  SignUp
                </Button>
              </Link>
              <Link to="/login">
                <Button>HAVE AN ACCOUNT?</Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};
export default SignUp;
