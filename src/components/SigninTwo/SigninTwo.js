import React, { useState, useEffect, useContext } from "react";
import GoogleLogin from "react-google-login";
import validator from "validator";
import { Redirect, useHistory, Link } from "react-router-dom";

import { Button, TextField, Grid, Paper } from "@material-ui/core";
import { SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons";
import { API } from "../../config/app";

const SigninTwo = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState(props.location.state.email);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validpassword, setvalidPassword] = useState("");

  useEffect(() => {
    if (!email) {
      return <Redirect to="/signin" />;
    }
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
  };

  const validatePass = (e) => {
    if (validator.isStrongPassword(password)) {
      setvalidPassword("");
      login();
    } else {
      setvalidPassword(
        'Enter a combination of at least six number,one Uppercase letters and punctuation(such as ! and &)"'
      );
    }
  };

  function login() {
    const data = { email, password };
    fetch(`${API}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          window.location.href = "/";
        } else {
          setError(res.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
  }

  return (
    <div className="container">
      <div className="row">
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      color: "#fff",
                      backgroundColor: "orange",
                      padding: "30px 0px",
                      margin: "-65px",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <center>LOGIN TO YOUR ACCOUNT</center>
                  </h1>

                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        style={{
                          backgroundColor: "#E21919",
                          color: "#fff",
                          marginTop: "100px",
                          padding: "8px 125px 8px 125px",
                        }}
                      >
                        <img
                          src="./Googles.png"
                          style={{
                            height: "30px",
                            width: "30px",
                            marginLeft: "-25px",
                          }}
                        />
                        Sign In with Google
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  <p className="textAlignCen">
                    <span className="line" />
                    <span className="or">Or</span>
                    <span className="line" />
                  </p>
                  <p className="proLogin">
                    <center>Use Uniq Brains Login </center>
                  </p>
                  <form>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          autoFocus
                        />
                      </Grid>

                      <span style={{ color: "red" }}> {validpassword}</span>

                      <Link
                        to="/forgot-email"
                        className="forgetbtn"
                        style={{
                          textAlign: "right",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        Forget Password
                      </Link>

                      <Grid item>
                        <center>
                          {" "}
                          <Button
                            style={{ width: "140px", marginTop: "15px" }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="button-blocks"
                            onClick={(event) => {
                              event.preventDefault();
                              validatePass(event);
                            }}
                          >
                            Next
                          </Button>
                        </center>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <center>
                    <p>
                      New User ? <a href="/signup">Sign Up Now!</a> it's{" "}
                      <span style={{ color: "orange" }}>FREE</span>
                    </p>
                  </center>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SigninTwo;
