import React,{useState} from "react";
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

const Signup =(props)=> {

  const [value,setValue] = useState("Teacher")
    
  function handlePrint() {
    if (value == 'Teacher') {
      console.log(value);
      window.location.href = "/teacher-form";
    }
    else if (value == 'Students') {
      console.log(value);
      window.location.href = "/student-form12";
    }
    else if (value == 'Employer') {
      console.log(value);
      window.location.href = "/signupemployer";
    }
    else if (value == 'Employee') {
      console.log(value);
      window.location.href = "/SignupEmployee";
    }
    else if (value == 'Institutes') {
      console.log(value);
      window.location.href = "/institute-form";
    }
  }

 function handleChange(e) {
    setValue(e.target.value );
    //console.log(this.state.value)
  }

    return (
      <div className="container">
        <img src="./login.jpg" alt="User signup" class="pagebannerleft" width="100%" height="380" />
        <div className="clearfix"></div>
        <div className="row">

          <div class="container d-flex justify-content-center mt-5">

            <div class="card">

              <div className="d-flex justify-content-center pt-5"><i className="fa fa-arrows-alt icon1"></i>
                <i className="fa fa-laptop icon2"></i></div>

              <span className="text-center dwntxt">
                India’s largest online platform with a network of most trusted local Tutors, students, Parents, Freelancers across India.
                Post and connect with the users in your locality.
              </span>


              <div className="chooseregistration">

                <h6 className="text-center font-weight-bold pt-4 error">Choose your registration type</h6>

                <div className="d-flex justify-content-center margin customrole">

                  <div className="clearfix"></div>
                  <select onChange={handleChange} style={{fontSize:'16px'}} className="btn btn-primary">
                    <option value="Teacher">Teacher</option>
                    <option value="Students">Students/Parents</option>
                    <option value="Employer">Employer</option>
                    <option value="Employee">Employee</option>
                    <option value="Institutes">Institutes</option>
                  </select>
                </div>
                <div className="d-flex custodrbutton">
                  <button className="btn btn-success " style={{fontSize:'16px'}} onClick={handlePrint}>Continue to signup</button>
                </div>


                <span className="vrydown"> Contact Us . Home</span>

              </div>
            </div>
          </div>

        </div >
      </div >
    );
  
}
export default Signup;