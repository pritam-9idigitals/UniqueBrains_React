import React, { useState } from "react";
import validator from 'validator'
import Signup from './signup'

import {
    Button,
    TextField,
    Grid,
    Paper,
    Link
} from "@material-ui/core";


const Student =(props) => {
    
        
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("") 
       const [validemail,setvalidEmail] = useState("")
       const [validpassword,setvalidPassword] = useState("")
       const [loading, isLoading] = useState(false)

      

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
        
        try{
            isLoading(true)
            const result = await fetch('https://talent-hub-backend.herokuapp.com/api/registration',{
                method : 'POST',
                headers :{ 
                "Content-Type":"application/json",
                "Accept" : "application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                    role:'student'
                }),    
            })
            const res = await result.json();
            console.log('log', res);
            if(res.success === true){
                window.location.href = "/";
              // console.log(res)
             }
             else{
                alert("incorrect credential")
             }
              
        } 
        
        catch (e) {
            console.log(e)
        }
        isLoading(false)
                  
    }
    if(loading === true) {
       
        return(
            <div style={{margin:0, flex:1}}>
              <img style={{width:"100px", height:"100px" }} src="/loading.png"/>
            </div>
            
        )
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
                                <h6 class="fs-title maintitles">Student Registration</h6>
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
                                                        name="username"
                                                        variant="outlined"
                                                        value={email}
                                                       onChange = {(e) =>validateEmail(e)}
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
                                                        onChange ={ (e)=>validatePass(e)}
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
                                        <input type="checkbox" name="checkbox" value="check" id="agree" />&nbsp;
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
export default Student;