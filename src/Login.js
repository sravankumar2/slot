import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import styles from "./Login.module.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito Sans ",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontFamily: "Nunito Sans",
  },
  btn_container: {
    width: "100%",
    textAlign: "center",
  },
  submit: {
    fontFamily: "Nunito Sans",
    color: "#FFFFFF",
    fontSize: "18px",
    outline: "none",
    cursor: "pointer",
    background: "#753eca",
    border: "none",
    borderRadius: "20px",
    marginTop: "1rem",
    padding: "8px 20px",
    fontWeight: "300",
    width: "100%",
    "&:hover": {
      background: "#5b30a0",
      transition: "all 0.3s",
    },
  },
  my_divider: {
    width: "100%",
    margin: "15px 0 10px",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.25)",
    backgroundColor: "transparent",
  },
  my_forgot_password: {
    fontFamily: "Nunito Sans",
    color: "#753eca",
    fontSize: "15px",
    cursor: "pointer",
    textDecoration: "none",
  },
}));
const Login = ({ handleClose }) => {
  const classes = useStyles();

  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [wrongUserInput, setWrongUserInput] = useState({ email: false });

  // On change handler
  const onChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  // on submit handler
  const submitHandler = async (e) => {
    // prevent the default behavior of form submission
    e.preventDefault();
    localStorage.setItem("loginStatus", true);
    localStorage.setItem("loginData", JSON.stringify({ userInput }));
    console.log(JSON.parse(localStorage.getItem("loginData")).userInput);
    setUserInput({
      email: "",
      password: "",
    });
    handleClose();
  };

  // validate input
  const handleGuest = () => {
    const Name = prompt("enter your name");
    localStorage.setItem("name", Name);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.cross__icon__container}
        onClick={handleClose}
      ></div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            style={{
              fontFamily: "Nunito Sans",
              fontSize: "32px",
              color: "#753eca",
            }}
          >
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              disabled={submitted}
              name="email"
              type="email"
              onChange={onChange}
              value={userInput.email}
              autoComplete="email"
              autoFocus
              error={wrongUserInput.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              disabled={submitted}
              name="password"
              label="Password"
              type="password"
              onChange={onChange}
              value={userInput.password}
              id="password"
              autoComplete="current-password"
            />
            <div className={classes.btn_container}>
              <button
                type="submit"
                variant="contained"
                className={classes.submit}
                disabled={submitted}
              >
                {" "}
                {submitted ? "Signing In ..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className={classes.btn_container}>
            <button className={classes.submit} onClick={handleGuest}>
              {" "}
              Play as Guest
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
