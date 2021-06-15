import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import validator from 'validator'

import {
   Button,
   TextField,
   Grid,
   Paper,
   AppBar,
   Typography,
   Toolbar,
   Link,
} from "@material-ui/core";


const  InstituteSignup = ()=> {
   
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [validemail,setvalidEmail] = useState("")
      const [validpassword,setvalidPassword] = useState("")
      

      
      const validateEmail = (e) => {
         // let email = e.target.value    
           setEmail(e.target.value)
           if (validator.isEmail(e.target.value)) {
           setvalidEmail('')
         } else {
           setvalidEmail('Enter valid Email!')
         }
       }
       
       const validatePass = (e) => {
          //let password = e.target.value  
          setPassword(e.target.value)  
           if (validator.isStrongPassword(e.target.value)) {
           setvalidPassword('')
         } else {
           setvalidPassword('Enter a combination of at least six number,one Uppercase letters and punctuation(such as ! and &)"')
         }
       }
     
   
     async function handleSubmit() {
         //console.warn(email,password)
          
        // let item = {email,password}
          let result = await fetch('https://talent-hub-backend.herokuapp.com/api/registration',{
         method : 'POST',
         body:JSON.stringify({email:email,password:password,role:"institutes"}), 
         headers :{
            "Content-Type":"application/json",
            "Accept" : "application/json"
          }
            
         })
         result = await result.json();
         console.log(result);
         //localStorage.setItem("user-info",JSON.stringify(result))

         
                   if(result){
                     window.location.href = "/";
                   }
                   
              
            
               
     }
   
   
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
                        className="login-form">
                        <h6 class="fs-title maintitles">Institute Registration</h6>
                        <p>&nbsp;</p>
                        <Paper
                           variant="elevation"
                           elevation={2}
                           className="login-background">

                           <Grid item>
                              <div class="social-login">
                                 <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i>
                                &nbsp;&nbsp;Sign in with Facebook</span> </button>
                              </div>

                           </Grid>
                           <Grid item>
                              <form onSubmit={(event)=>{
                                            event.preventDefault()
                                            handleSubmit();
                                        }}>
                                 <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                       <TextField
                                          type="email"
                                          placeholder="Email"
                                          fullWidth
                                          name="email"
                                          variant="outlined"
                                          value={email}
                                          onChange={(e)=>validateEmail(e)}
                                          required
                                          autoFocus
                                       />
                                    </Grid>
                                    <span style={{color:'red'}}> {validemail}</span>
                                    <Grid item>
                                       <TextField
                                          type="password"
                                          placeholder="Password"
                                          fullWidth
                                          name="password"
                                          variant="outlined"
                                          value={password}
                                          onChange={(e)=>validatePass(e)}
                                          required
                                       />
                                    </Grid>
                                    <span style={{color:'red'}}> {validpassword}</span>
                                    <Grid item>
                                       <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className="button-blocks">
                                          Submit
                                                </Button>
                                    </Grid>
                                 </Grid>
                              </form>
                           </Grid>
                           <Grid item>
                              <input required type="checkbox" name="checkbox" value="check" id="agree" />&nbsp;
                                I have read and agree to the Terms and Conditions and Privacy Policy

                                    <Link href="#" variant="body2" className="button-blockn">
                                 Forgot Password?
                                    </Link>
                           </Grid>
                        </Paper>
                     </Grid>
                  </Grid>
               </Grid>
            </div>
         </div>
      );
   
}
export default InstituteSignup;