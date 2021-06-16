import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/home/home";
import Signin from "../components/signin/signin";
import SigninTwo from "../components/SigninTwo/SigninTwo";
import SigninOtp from "../components/SigninOtp/SigninOtp";
import Signup from "../components/signup/signup";
import Courses from "../components/courses/courses";
import ProfileDetails from "../components/profileDetails/profileDetails";
import SignupEmployer from "../components/signup/signupEmpoyer";
import PostProject from "../components/signup/postProject";
import SignupEmployee from "../components/signup/signupEmployee";
import Empskills from "../components/signup/empskills";
import Jobs from "../components/jobs/jobs";
import Membership from "../components/signup/membership";
import SignupTutor from "../components/signup/signupTutor";
import Tutordetails from "../components/signup/tutordetails";
import Institute from "../components/signup/institute";
import InstituteDetails from "../components/signup/instidetails";
import Student from "../components/signup/signupStudent";
import PostRequirement from "./signup/postRequirement";
import ForgotEmail from "../components/forget-password/Email/Email";
import ForgotPassword from "../components/forget-password/password/Password"
import StudentForm from "../components/students/students"
import StudentForm2 from "../components/students/Student"
import Teacherform from "../components/teacher/teacher"
import Institutes from "../components/institute/institute"
import ProfilEmployee from "../components/profileDetails/ProfileEmployee"
import ProfilStudent from "../components/profileDetails/profileStudent"



export default function Routing() {
  return (
    
      <div>
        <hr />
        
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/courses"> <Courses /> </Route>
          <Route path="/profiledetails"> <ProfileDetails /> </Route>
          <Route path="/signupemployer"> <SignupEmployer /> </Route>
          <Route path="/postproject"> <PostProject /> </Route>
          <Route path="/signupemployee"> <SignupEmployee /> </Route>
          <Route path="/signin" component={Signin}/>
          <Route path="/signintwo" component={SigninTwo}/>
          <Route path="/signinotp" component={SigninOtp}/>
          <Route path="/signup" component={Signup}/> 
          <Route path="/empskills"> <Empskills /> </Route>
          <Route path="/jobs"> <Jobs /> </Route>
          <Route path="/membership"> <Membership /> </Route>
          <Route path="/signupTutors"> <SignupTutor /> </Route>
          <Route path="/tutorDetails"> <Tutordetails /> </Route>
          <Route path="/instituteSignup"> <Institute /> </Route>
          <Route path="/instituteDetails"> <InstituteDetails /> </Route>
          <Route path="/studentSignup"> <Student /> </Route>
          <Route path="/postRequirement"> <PostRequirement /> </Route>
          <Route exact path="/forgot-email" component={ForgotEmail}/> 
          <Route exact path="/forgot-password" component={ForgotPassword}/>
          <Route exact path="/student-form" component={StudentForm}/>
          <Route exact path="/student-form12" component={StudentForm2}/>
          <Route exact path="/teacher-form" component={Teacherform}/>
          <Route exact path="/institute-form" component={Institutes}/>
          <Route exact path="/profilEmployee" component={ProfilEmployee}/>
          <Route exact path="/profilStudent" component={ProfilStudent}/>

        </Switch>
      </div>
    
  );
}