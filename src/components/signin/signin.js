import React, { useState,useEffect, createContext } from "react";
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



const Signin = () => {
   
   const history = useHistory();
   const [email,setEmail] = useState("");
   const [next,setNext] = useState(false);

const [validemail,setvalidEmail] = useState("")


const responseGoogle = (response) => {
   console.log(response);
 }

const validateEmail = (e) => {
  // let email = e.target.value    
    setEmail(e.target.value)
    if ((validator.isMobilePhone(e.target.value))||(validator.isEmail(e.target.value))) {
    setvalidEmail('')
    }
   else {
    setvalidEmail('Enter valid number! OR Valid phone number')
  }
  
}




  function login(){
   //const data = {email};
   //console.log(data)
   return (<Redirect to={{
      pathname: "/signintwo",
      state: { email: email }
    }} />);
   

  //function redirect() {
//      if(success){
//          return (<Redirect to="/" />);
//       }
//       return "";
//  }

  }



  return (
     
    <div class="container">
    <div className="row">
       {next && login()}

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
                                    <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff',backgroundColor:'orange',padding:'30px 0px',margin:'-65px',borderRadius:'10px 10px 0 0'}}>
                                   <center>LOGIN TO YOUR ACCOUNT</center></h1>

                                   <GoogleLogin
    clientId="274074637494-s2fbta7752oii5904is867d05eiff735.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} 
      disabled={renderProps.disabled} 
      style={{backgroundColor:'#E21919',color:'#fff',marginTop:'100px',padding:'8px 129px 8px 129px',fontSize:'14px'}}>
  <img src="./Googles.png" style={{height:'30px',width:'30px',marginLeft:'-25px'}}></img>Sign In with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <p className = "textAlignCen">
     <span className = "line"></span>
     <span className = "or">Or</span>
     <span className = "line"></span>
  </p>
  <p className="proLogin"><center>Use Talenthunt Login</center></p>
                      <form>
                         
                         <Grid container direction="column" spacing={2} >
                            <Grid item>
                                
                               <TextField
                                  type="email"
                                  placeholder="Email ID / Mobile No"
                                  fullWidth
                                  name="email"
                                  variant="outlined"
                                  onChange = {(e)=>validateEmail(e)}
                                  value = {email}
                                  required
                                  autoFocus
                               />
                            </Grid>
                            <span style={{color:'red'}}> {validemail}</span>
                            
                            
                            <Grid item>
                              <center> <Button
                               style={{width:"150px",fontSize:'14px'}}
                                  variant="contained"
                                  color="primary"
                                  
                                  type="submit"
                                  className="button-blocks" onClick={(event) => {
                                     event.preventDefault();
                                     setNext(true);
                                  }}>
                                  Next
                                        </Button></center>
                            </Grid>
                         </Grid>
                      </form>
                   </Grid>
                   <Grid item>
                     <center><p>New User?<a href="#">Sign Up Now!</a>it's <span style={{color:'orange'}}>FREE</span></p></center>
                   </Grid>
                </Paper>
             </Grid>
          </Grid>
       </Grid>
    </div>
 </div>
  )
};

export default Signin;

// we use redirect method please check line no 19&64 otherwise u won't understand it.
