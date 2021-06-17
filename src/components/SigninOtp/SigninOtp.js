import React, { useState, useEffect } from "react";
import GoogleLogin from 'react-google-login';
import validator from 'validator';
import { Redirect, useHistory } from 'react-router-dom'
import {
   Button,
   TextField,
   Grid,
   Paper,
   Link,
} from "@material-ui/core";
import { SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons";
import Email from "../forget-password/Email/Email";



const SigninOtp = () => {
   const history = useHistory();
   //const [otp,setOtp] = useState("")
   const [otp, setOtp] = useState(new Array(4).fill(""))


   const [validemail, setvalidEmail] = useState("")


   function Otp(event, index) {
      const arr = otp;
      arr[index] = parseInt(event.target.value)
      setOtp(arr)
      /*  setOtp([...otp.map((d,idx)=>(idx===index)?event.value:d)]) */
      console.log(otp);
   }


   const responseGoogle = (response) => {
      console.log(response);
   }

   const validateEmail = (e) => {
      // let email = e.target.value    
      setOtp(e.target.value)
      if (validator.isEmail(e.target.valuess)) {
         setvalidEmail('')
      } else {
         setvalidEmail('Enter valid email!')
      }
   }



   async function login() {
      // const data = {email,password};
      // console.log(data)

      const result = await fetch("http://talent-hub-backend.herokuapp.com/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(otp)
      })
      const res = await result.json();
      console.log(res);

      if (res.success === true) {
         //  window.location.href = "/";
         // console.log(res)
      }
      else {
         alert("incorrect credential")
      }
   };

   //  function redirect() {
   //       if(success){
   //          return (<Redirect to="/" />);
   //       }
   //       return "";
   //  }





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
                     <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background">

                        <Grid item>
                           <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#fff', backgroundColor: 'orange', padding: '30px 0px', margin: '-65px', borderRadius: '10px 10px 0 0' }}>
                              <center>LOGIN TO YOUR ACCOUNT</center></h1>

                           <GoogleLogin
                              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                              render={renderProps => (
                                 <button onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    style={{ backgroundColor: '#E21919', color: '#fff', marginTop: '100px', padding: '8px 125px 8px 125px' }}>
                                    <img src="./Googles.png" style={{ height: '30px', width: '30px', marginLeft: '-25px' }}></img> Sign In with Google</button>
                              )}
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                           />
                           <p className="textAlignCen">
                              <span className="line"></span>
                              <span className="or">Or</span>
                              <span className="line"></span>
                           </p>
                           <p className="proLogin"><center>Use Talenthunt Login</center></p>
                           <h5><center>OTP Verification</center></h5>
                           <span><center>Enter the 6 degit OTP</center></span>
                           <div id="otp" class="inputs d-flex flex-row justify-content-center mt-5">
                              {
                                 otp.map((data, index) => {
                                    return (
                                       <input class="m-2 text-center form-control " type="text" id="first" maxlength="1"
                                          key={index}
                                          value={data}
                                          onChange={(e) => Otp(e, index)}
                                       />
                                    )
                                 }

                                 )
                              }
                           </div>

                           {/* <div id="otp" class="inputs d-flex flex-row justify-content-center mt-5"> 
  <input class="m-2 text-center form-control " type="text" id="first" maxlength="1" />
   <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
    <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
     <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> 
     <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
<input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>*/}
                           <span style={{ marginTop: '30rem' }}><center>Don't get the OTP?<a href="#">Resend OTP</a></center></span>

                           <form>

                              <Grid container direction="column" spacing={2} >
                                 <span style={{ color: 'red' }}> {validemail}</span>

                                 <Grid item>
                                    <center> <Button
                                       style={{ width: "140px", marginTop: '15px' }}
                                       variant="contained"
                                       color="primary"
                                       type="submit"
                                       className="button-blocks" onClick={(event, index) => {
                                          event.preventDefault();
                                          login();
                                       }}>
                                       VERIFY
                                    </Button></center>
                                 </Grid>
                              </Grid>
                           </form>
                        </Grid>
                        <Grid item>

                        </Grid>
                     </Paper>
                  </Grid>
               </Grid>
            </Grid>
         </div>
      </div>
   )
};

export default SigninOtp;
