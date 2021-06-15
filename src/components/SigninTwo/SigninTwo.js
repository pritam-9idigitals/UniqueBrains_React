import React, { useState,useEffect,useContext } from "react";
import GoogleLogin from 'react-google-login';
import validator from 'validator';
import { Redirect, useHistory,Link} from 'react-router-dom'


import {
  Button,
  TextField,
  Grid,
  Paper,
  
} from "@material-ui/core";
import { SignalCellularConnectedNoInternet0Bar } from "@material-ui/icons";




const SigninTwo = (props) => {
   
   const history = useHistory();
   const [email,setEmail] = useState(props.location.state.email)
   console.log(email)

useEffect(()=>{

   // if(!email){
   //    return  (<Redirect to="/signin" />);
   // }
},[])
const [password,setPassword] = useState("")

const [validemail,setvalidEmail] = useState("")
const [validpassword,setvalidPassword] = useState("")

const responseGoogle = (response) => {
   console.log(response);
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


 async function login(){
   const data = {email,password};
   console.log(data)

   const result = await fetch("http://talent-hub-backend.herokuapp.com/api/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(data)
   })
   const res = await result.json();
   console.log(res);

   if(res.success === true){
      window.location.href = "/";
    // console.log(res)
   }
   else{
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
                                    <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff',backgroundColor:'orange',padding:'30px 0px',margin:'-65px',borderRadius:'10px 10px 0 0'}}>
                                   <center>LOGIN TO YOUR ACCOUNT</center></h1>
                                   
                                   <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} 
      disabled={renderProps.disabled} 
      style={{backgroundColor:'#E21919',color:'#fff',marginTop:'100px',padding:'8px 125px 8px 125px'}}>
        <img src="./Googles.png" style={{height:'30px',width:'30px',marginLeft:'-25px'}}></img> Sign In with Google</button>
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
  <p className="proLogin"><center>Use Talenthunt Login </center></p>
                      <form>
                         
                         <Grid container direction="column" spacing={2} >
                            <Grid item>
                               <TextField
                               
                                  type="password"
                                  placeholder="Password"
                                  fullWidth
                                  name="password"
                                  variant="outlined"
                                  onChange = {(e)=>validatePass(e)}
                                  
                                  required
                                  autoFocus
                               />
                               
                            </Grid>
                            
                            
                            <span style={{color:'red'}}> {validpassword}</span>

                            <Link to="/forgot-email"  className="forgetbtn" style={{textAlign:"right",color:'red',corsor:"pointer"}} >Forget Password</Link>
                              
                            <Grid item>
                              <center> <Button
                               style={{width:"140px",marginTop:'15px'}}
                                  variant="contained"
                                  color="primary"
                                  type="submit"
                                  className="button-blocks" onClick={(event) => {
                                     event.preventDefault();
                                     login();
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

export default SigninTwo;
