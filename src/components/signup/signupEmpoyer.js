import React, { useState, useEffect, createContext } from "react";

//import HorizontalLabelPositionBelowStepper from "./Signupmaterial.js"
import validator from "validator";
import { Redirect, useHistory } from "react-router-dom";
import { Button, TextField, Grid, Paper, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["", "", "", ""];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <center>
            <h5>Project Information</h5>
          </center>
          <div class="form-group " style={{ width: "300px" }}>
            <label for="exampleFormControlTextarea1 ">
              Choose the name of the project
            </label>
            <textarea
              class="form-control "
              placeholder="tell us more about the project"
              id="exampleFormControlTextarea1"
              rows="5"
              style={{ width: "300px" }}
            ></textarea>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <center>
            <h5>Select Skills</h5>
          </center>
          <div className="btn-group  bootstrap-select " id="group">
            <div>
              <h6>Select Skills</h6>
              <select className="list-dt " id="month" name="expmonth" multiple>
                <span className="text">Web Design</span>
                <p>Select Skills</p>
                <option>HTML</option>
                <option>CSS</option>
                <option>React</option>
                <option>JAVA</option>
                <option>PHP</option>
                <option>JAVASCRIPT</option>
                <option>NODE</option>
                <option>Boostrap</option>
                <option>Python</option>
                <option>AWS</option>
                <option> Networking</option>
                <option>Translation</option>
                <option>c++</option>
              </select>
            </div>
          </div>
          <div className="btn-group bootstrap-select " id="grouping">
            <div>
              <h6>Select Skills</h6>
              <select className="list-dts " id="month" name="expmonth" multiple>
                <span className="text">Web Design</span>
                <p>Select Skills</p>
                <option>HTML</option>
                <option>Full time</option>
                <option>Part time</option>
                <option>Freelanncer</option>
                <option>Contract based</option>
                <option>JAVASCRIPT</option>
                <option>NODE</option>
                <option>Boostrap</option>
                <option>Python</option>
                <option>AWS</option>
                <option> Networking</option>
                <option>Translation</option>
                <option>c++</option>
              </select>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="container" id="role">
          <div>
            <center>
              {" "}
              <h2 className="rolehead">Choose Membership</h2>
            </center>
          </div>
          <div className="row">
            <div className="card col-lg-6 cards">
              <img className="totorimg" src="./logo512.png"></img>
              <div class="card-body">
                <h6 class="card-title">Free Membership</h6>
                <center>
                  {" "}
                  <div class="form-check form-check-inline">
                    <input id="checkbox3" type="checkbox" />
                  </div>
                </center>
              </div>
            </div>

            <div class="card col-lg-6 cards">
              <img className="totorimg" src="./logo512.png"></img>
              <div class="card-body">
                <h6 class="card-title">Silver Membership</h6>
                <center>
                  {" "}
                  <div class="form-check form-check-inline">
                    <input id="checkbox3" type="checkbox" />
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div class="container-lg">
          <center>
            <h3>Success!</h3>
          </center>
          <center>
            <span>Your job has been successfully posted.</span>
            <span
              style={{
                height: "50px",
                width: "10px",
                backgroundColor: "#6CBF4D",
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="100"
                fill="#DAF7A6"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </span>
          </center>
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

const SignupEmployer = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div class="container">
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
                    <center>Let us know about your requirement</center>
                  </h1>

                  <form>
                    <Grid container direction="column" spacing={2}>
                      <div
                        className={classes.root}
                        style={{ marginTop: "40px" }}
                      >
                        <Stepper activeStep={activeStep} alternativeLabel>
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                        <div>
                          {activeStep === steps.length ? (
                            <div>
                              <Typography className={classes.instructions}>
                                All steps completed
                              </Typography>
                              <Button onClick={handleReset}>Reset</Button>
                            </div>
                          ) : (
                            <div>
                              <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                              </Typography>
                              <div>
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                  className={classes.backButton}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleNext}
                                >
                                  {activeStep === steps.length - 1
                                    ? "View Job post"
                                    : "Next"}
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignupEmployer;

// we use redirect method please check line no 19&64 otherwise u won't understand it.
