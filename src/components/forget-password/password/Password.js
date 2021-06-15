import React, { useState,useEffect, createContext } from "react";
import GoogleLogin from 'react-google-login';
import validator from 'validator';
import { Redirect, useHistory,Link } from 'react-router-dom'
import {
  Button,
  TextField,
  Grid,
  Paper,
  
} from "@material-ui/core";

function Password() {
  /*   const forgotemail = (event) => {
        event.preventDefault()
        history.push("/forgot-password")
    } */

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
                className="login-form">
                <Paper
                   variant="elevation"
                   elevation={2}
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
  <p className="proLogin" style={{marginTop:'40px',fontSize:'16px'}}><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Reset Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center></p>
                      <form style={{paddingTop:'10px'}}>
                         
                         <Grid container direction="column" spacing={3} >
                            <Grid item>
                                
                               <TextField
                                  type="password"
                                  placeholder="New Password"
                                  fullWidth
                                  name="NewPassword"
                                  variant="outlined"
                                  /* onChange = {(e)=>validateEmail(e)}
                                  value = {email} */
                                  /* style={{paddingBottom:"20px"}} */
                                  required
                                  autoFocus
                               />
                               {/* <br /> */}
                            </Grid>
                            <Grid item>
                                
                                <TextField
                                   type="password"
                                   placeholder="Confirm Password"
                                   fullWidth
                                   name="confirm-Password"
                                   variant="outlined"
                                   /* onChange = {(e)=>validateEmail(e)}
                                   value = {email} */
                                   /* style={{paddingBottom:"20px"}} */
                                   required
                                   autoFocus
                                />
                                {/* <br /> */}
                             </Grid>
                            <span style={{color:'red'}}> {/* {validemail} */}</span>
                            
                            
                            <Grid item>
                              <center> <Button
                               style={{width:"120px"}}
                                  variant="contained"
                                  color="primary"
                                  type="submit"
                                  className="button-blocks" /* onClick={(event) => {
                                    
                                     forgotemail
                                  }} */ >
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

export default Password
