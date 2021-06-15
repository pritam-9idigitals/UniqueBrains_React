import React, { useState, useEffect, createContext } from "react";
import CloseIcon from "@material-ui/icons/Close";

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
  return ["", "", "", "", ""]; //here we have declare 5 steps.
}

const SignupEmployee = () => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleChange(event) {
    setValue(event.target.value);
    console.log(value);
    //console.log(event.target.value);
  }

  function handleCheck(event) {
    setValue(event.target.value);
    console.log(value);
    //console.log(event.target.value);
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <center>
              <h5>Select Skills</h5>
            </center>
            <div className="btn-group  bootstrap-select " id="group">
              <div>
                <h6>Select Skills *</h6>

                <select
                  className="list-dt "
                  id="month"
                  name="expmonth"
                  multiple
                  onChange={(e) => handleChange(e)}
                >
                  <span className="text">Web Design</span>
                  <p>Select Skills</p>
                  <option>HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="React">React</option>
                  <option value="JAVA">JAVA</option>
                  <option value="PHP">PHP</option>
                  <option value="JAVASCRIPT">JAVASCRIPT</option>
                  <option value="NODE">NODE</option>
                  <option value="Boostrap">Boostrap</option>
                  <option value="Python">Python</option>
                  <option value="AWS">AWS</option>
                  <option value="Networking"> Networking</option>
                  <option value="Translation">Translation</option>
                  <option value="c++">c++</option>
                </select>
              </div>
            </div>
            <div className="btn-group bootstrap-select " id="grouping">
              <div>
                <span class="label label-default">
                  HTML
                  <CloseIcon className="closeicon" />
                </span>

                <span class="label label-default">
                  CSS
                  <CloseIcon className="closeicon" />
                </span>

                <span class="label label-default">
                  {value}
                  <CloseIcon className="closeicon" />
                </span>

                <span class="label label-default">
                  {value}
                  <CloseIcon className="closeicon" />
                </span>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div class="container-lg">
            <center>
              <h5>Education</h5>
            </center>
            <div style={{ margin: "10px 60px 0px 0px" }}>
              <h6>Select Education</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" HTMLfor="flexCheckDefault">
                  Intermediate
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" HTMLfor="flexCheckChecked">
                  Graduate
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" HTMLfor="flexCheckChecked">
                  Post Graduate
                </label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <center>
              <h5>Select Skills</h5>
            </center>
            <div className="btn-group  bootstrap-select " id="group">
              <div>
                <h6>Select Skills</h6>
                <select
                  className="list-dt "
                  id="month"
                  name="expmonth"
                  multiple
                >
                  <span className="text">Web Design</span>
                  <p>Select Skills</p>
                  <option>HTML</option>
                  <option>Fresher</option>
                  <option>1 to 3 Years</option>
                  <option>3 to 5 Years</option>
                  <option>5 Years +</option>
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
                <select
                  className="list-dts "
                  id="month"
                  name="expmonth"
                  multiple
                >
                  <span className="text">Web Design</span>
                  <p>Select Skills</p>

                  <option>Full time</option>
                  <option>Part time</option>
                  <option>Freelanncer</option>
                  <option>Contract based</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
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
            <div className="row">
              <div class="card col-lg-6 cards">
                <img className="totorimg" src="./logo512.png"></img>
                <div class="card-body">
                  <h6 class="card-title">Gold Membership</h6>
                  <center>
                    {" "}
                    <div class="form-check form-check-inline">
                      <input
                        id="checkbox3"
                        type="checkbox"
                        onChange={(e) => handleCheck(e)}
                      />
                    </div>
                  </center>
                </div>
              </div>

              <div class="card col-lg-6 cards">
                <img className="totorimg" src="./logo512.png"></img>
                <div class="card-body">
                  <h6 class="card-title">Platinum</h6>
                  <center>
                    {" "}
                    <div class="form-check form-check-inline">
                      <input
                        id="checkbox3"
                        type="checkbox"
                        onChange={(e) => handleCheck(e)}
                      />
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <center>
              <h5>Basic Details</h5>
            </center>
            <form>
              <div class="form-group">
                <label>Your full name</label>
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group">
                <label>Date of Birth</label>
                <input type="date" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div class="form-group">
                <label>Communication address</label>
                <input type="text" class="form-control" placeholder="Address" />
              </div>
              <div class="form-group">
                <label>Your area pincode</label>
                <input type="text" class="form-control" placeholder="Pincode" />
              </div>
            </form>
          </div>
        );

      default:
        return "Unknown stepIndex";
    }
  }

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
                              <div style={{ textAlign: "center" }}>
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

export default SignupEmployee;

// we use redirect method please check line no 19&64 otherwise u won't understand it.
