import React,{useState} from "react";
import { useHistory } from "react-router-dom";

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
    let history = useHistory();

  const [value,setValue] = useState("Teacher")

  const Teacher =() => {
      history.push('/teacher-form')

  }
  const Student =() => {
    history.push('/student-form12')

}
const Employee =() => {
    history.push('/signupemployee')

}
const Employer =() => {
    history.push('/signupemployer')

}
const Institute =() => {
    history.push('/institute-form')

}
    
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
      window.location.href = "/instituteSignup";
    }
  }

 function handleChange(e) {
    setValue(e.target.value );
    //console.log(this.state.value)
  }

    return (
      <div className="container">
         <div id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 id="exampleModalLabel">What are you looking for?</h2>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body p-0 ">
                                    <img className="img-fluid " src="https://media.istockphoto.com/photos/teacher-with-document-picture-id905256730" alt="tutor" />
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={Teacher}>Teacher</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img className="img-fluid" src="https://media.istockphoto.com/photos/cute-smiling-little-african-american-schoolgirl-with-books-on-yellow-picture-id1202500140" alt="tutor" />
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={Student}>Student</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/08/11/23/13/employees-885338_960_720.jpg" alt="a girl" />
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={Employee}>Employee</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img className="img-fluid" src="https://media.istockphoto.com/photos/business-people-working-together-at-coffee-shop-picture-id876388422" alt="post your job" />
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary" onClick={Employer}>Employer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3"></div>
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-body p-0">
                                    <img className="img-fluid" src="https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_960_720.jpg" alt="Looking for teaching" />
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary" onClick={Institute}>Institute</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
      </div >
    );
  
}
export default Signup;