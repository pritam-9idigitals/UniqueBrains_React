import React, { useState,useEffect, createContext } from "react";
import GoogleLogin from 'react-google-login';
import validator from 'validator';
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Link,
} from "@material-ui/core";

function Email() {
    let history = useHistory();

    function login(){
        history.push("/forgot-password");
        
    }
    return (
        <div>
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
                   elevation={1}
                   className="login-background"
                  style={{paddingBottom:'25px'}}
                   >

                                     <Grid item>
                                    <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff',backgroundColor:'orange',padding:'20px 0px',margin:'-65px',borderRadius:'10px 10px 0 0'}}>
                                   <center style={{fontSize:'32px'}}>FORGOT PASSWORD</center></h1>

                           
  <p className = "textAlignCen" /* style={{marginBottom:"12px"}} */>
     <span className = ""></span>
     <span className = "or"></span>
     <span className = ""></span>
  </p>
  <p className="proLogin" style={{marginTop:'40px',fontSize:'16px'}}><center>Enter Your Valid Email Or Phone Number Before Proceed To Password Reset</center></p>
                      <form style={{paddingTop:'10px'}}>
                         
                         <Grid container direction="column" spacing={3} >
                            <Grid item>
                                
                               <TextField
                                  type="email"
                                  placeholder="Email ID / Mobile No"
                                  fullWidth
                                  name="email"
                                  variant="outlined"
                                  /* onChange = {(e)=>validateEmail(e)}
                                  value = {email} */
                                 /*  required
                                  autoFocus */
                               />
                            </Grid>
                            <span style={{color:'red'}}> {/* {validemail} */}</span>
                            
                            
                            <Grid item>
                              <center> <Button
                               style={{width:"120px",marginButtom:'25px'}}

                                  variant="contained"
                                  color="primary"
                                  type="submit"
                                  className="button-blocks" onClick={(event) => {
                                     event.preventDefault();
                                     login();
                                  }} >
                                  Next
                                        </Button></center>
                            </Grid>
                         </Grid>
                      </form>
                   </Grid>
                </Paper>
             </Grid>
          </Grid>
       </Grid>
    </div>
 </div>
        </div>
    )
}

export default Email
