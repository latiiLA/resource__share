import React, { useState } from "react";
import backgroundImage from "../assets/background1.jpg";
import left_image from "../assets/file_sharing2.jpg";
import left_image2 from "../assets/login.avif";
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
import { Link, useNavigate } from "react-router-dom";

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
  loginBox: {
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
  login1: {
    textAlign: "center",
    fontSize: "3rem !important",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: 5,
    // backgroundColor: "transparent",
    backgroundColor: "#ffffff",
  },
  inputField: {
    backgroundColor: "transparent", // Set the background color of the input fields to transparent
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Boolean(email) && Boolean(password) && password.length > 7) {
      console.log(email, password, password.length);
      try {
        const response = await axios.post(
          "http://localhost:4000/auth/loginUser",
          {
            email,
            password,
          }
        );
        console.log("Logging in successful:", response.data);

        setEmail("");
        setPassword("");
        alert("Successfully Logged In.");
        navigate("/");
        // You can redirect the user to the newly created post or update the post list
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Error logging in");
      }
    } else {
      console.log("Error, invalid login data ");
    }
  };

  return (
    <Box className={classes.all}>
      <Stack gap={2} className={classes.loginBox}>
        <Card sx={{ width: "50%" }}>
          <CardMedia
            component="img"
            // height="300"
            image={left_image2}
            alt="login picture"
          />
        </Card>

        <Box sx={{ width: "50%", margin: "auto" }}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Stack gap={2}>
              <Typography className={classes.login1}>Login</Typography>

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
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ alignItems: "center", width: "50%" }}
              >
                LOGIN
              </Button>
              <Link to="/signup">
                <Button>CREATE AN ACCOUNT?</Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};
export default Login;
