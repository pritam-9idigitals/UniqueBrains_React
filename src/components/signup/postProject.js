import React from "react";
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
import { withRouter } from 'react-router';
import { Title } from "@material-ui/icons";
import axios from "axios";

class PostProject extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         title: '',
         description: '',
         skill: [''],
         employemnt: [''],
         jobType: '',
         cardType: '',
         cardHolderName: '',
         cardNumber: '',
         cvc: '',
         ExpiryDate: "",
      }



   }

   handleChange = (e) => {
      let title = e.target.value
      let testArea = e.target.value
      this.setState({ title: title, description: testArea })
   }
   seletSkill = (e) => {
      let value = Array.from(e.target.selectedOptions, option => option.value);
      this.setState({ skill: value });
      console.log(value);
      // console.log(Array(e.target.value));
      // this.setState({ skill: Array(e.target.value) })
   }
   employemnt = (e) => {
      console.log(e.target.value);
      this.setState({ employemnt: e.target.value })
   }
   FreejobType = () => {
      this.setState({ jobType: 'Free job post' })

   }
   PremiumjobType = () => {
      this.setState({ jobType: 'Premium Job Post' })

   }
   creditCardType = () => {
      this.setState({ cardType: 'Credit card' })
   }
   paypalCardType = () => {
      this.setState({ cardType: 'PayPal card' })
   }
   cardType = () => {
      this.setState({ cardType: 'Credit card' })
   }

   SubmitFrom = (e) => {
      e.preventDefault()
      const { title, description, skill, employemnt, jobType } = this.state
      const { cardHolderName, cardType, ExpiryDate, cvc, cardNumber } = this.state

      const data = {
         title: title,
         description: description,
         skill: skill,
         employemnt: employemnt,
         jobType: jobType,
         paymentInformtation: {
            cardHolderName: cardHolderName,
            cardType: cardType,
            ExpiryDate: ExpiryDate,
            cvc: cvc,
            cardNumber: cardNumber
         }
      }
      axios
         .post('http://localhost:3001/jobs', data)
         .then((result) => {
            console.log(result);
            alert('Job Post Success Success')
         })
         .catch(err => {
            alert("Some thing Worng Try Again Later");
            console.log(err);
         });

   }


   render() {

      return (
         <div class="container">
            <div className="row">


               <div class="container-fluid" id="grad1">
                  <div class="row justify-content-center mt-0">
                     <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                           <h4>Tell us what you need done</h4>

                           <p>Fill all form field to go to next step</p>
                           <div class="row">
                              <div class="col-md-12 mx-0">
                                 <form onSubmit={this.SubmitFrom} id="msform">
                                    <ul id="progressbar">
                                       <li class="active" id="account"><strong>Project</strong></li>
                                       <li id="personal"><strong>Skills</strong></li>
                                       <li id="payment"><strong>Budget</strong></li>
                                       <li id="confirm"><strong>Finish</strong></li>
                                    </ul>
                                    <fieldset>
                                       <div class="form-card">
                                          <h6 class="fs-title">Project Information</h6>
                                          <p>&nbsp;</p>
                                          <p></p>


                                          <input onChange={this.handleChange} type="text" name="title" placeholder="Choose the name of the project" />
                                          <textarea onChange={this.handleChange} name="message" rows="5" cols="30">Tell us more about the project</textarea>
                                       </div>
                                       <input type="button" name="next" class="next action-button" value="Next Step" />
                                    </fieldset>
                                    <fieldset>
                                       <div class="form-card">
                                          <h6 class="fs-title">Select skills</h6>
                                          <p>&nbsp;</p>
                                          <select value={this.state.skill} onChange={this.seletSkill} class="custom-select" multiple>
                                             <option value={"php"} selected>PHP</option>
                                             <option value={"Python"}>Python</option>
                                             <option value={"React"}>React</option>
                                             <option value={"Angular"}>Angular</option>
                                          </select>
                                          <p>&nbsp;</p>
                                          <h6 class="fs-title">Select Employement</h6>

                                          <select onChange={this.employemnt} class="custom-select" multiple>
                                             <option value="Full time" selected>Full time</option>
                                             <option value="Part time">Part time</option>
                                             <option value="Freelance">Freelance</option>
                                             <option value="Contract based">Contract based</option>
                                          </select>
                                       </div>
                                       <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                       <input type="button" name="next" class="next action-button" value="Next Step" />
                                    </fieldset>
                                    <fieldset>
                                       <div class="form-card">
                                          <h6 class="fs-title">Select type of job posting</h6>
                                          <p>&nbsp;</p>
                                          <div class="empboxes">
                                             <div class="col-xs-4 dhbgtp">
                                                <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                <button onClick={this.FreejobType} type="button" class="btn btn-primary btn-radio">Free Job post</button>
                                                <input type="checkbox" id="left-item" class="hidden" />
                                             </div>
                                             <div class="col-xs-4 dhbgtp">
                                                <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                <button onClick={this.PremiumjobType} type="button" class="btn btn-primary btn-radio">Premium Job post</button>
                                                <input type="checkbox" id="middle-item" class="hidden" />
                                             </div>
                                          </div>





                                          <h2 class="fs-title">Payment Information</h2>
                                          <div class="radio-group">
                                             <div class='radio' onClick={this.creditCardType} data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" />

                                             </div>
                                             <div onClick={this.paypalCardType} class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" />
                                             </div>
                                          </div>
                                          <label class="pay">Card Holder Name*</label> <input type="text" name="holdername" placeholder="" />
                                          <div class="row">
                                             <div class="col-9"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                             <div class="col-3"> <label class="pay">CVC*</label> <input type="password" name="cvcpwd" placeholder="***" /> </div>
                                          </div>
                                          <div class="row">
                                             <div class="col-3"> <label class="pay">Expiry Date*</label> </div>
                                             <div class="col-9"> <select class="list-dt" id="month" name="expmonth">
                                                <option selected>Month</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                             </select> <select class="list-dt" id="year" name="expyear">
                                                   <option selected>Year</option>
                                                </select> </div>
                                          </div>
                                       </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                       <input type="submit" name="make_payment" class="next action-button" value="Confirm" />
                                    </fieldset>
                                    <fieldset>
                                       <div class="form-card">
                                          <h2 class="fs-title text-center">Success !</h2>
                                          <div class="row justify-content-center">
                                             <div class="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" /> </div>
                                          </div>
                                          <div class="row justify-content-center">
                                             <div class="col-7 text-center">
                                                <h5>Your job has been Successfully posted</h5>
                                                <p>&nbsp;</p>
                                                <input type="button" name="make_payment" class="view-job-post" value="view-job-post" />
                                             </div>
                                          </div>
                                       </div>
                                    </fieldset>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      );
   }
}
export default PostProject;