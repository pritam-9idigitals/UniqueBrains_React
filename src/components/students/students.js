import Reac from "react";

import 'react-dual-listbox/lib/react-dual-listbox.css';

import {

  Grid,
  Paper

} from "@material-ui/core";


function Student() {



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
                className="login-form"
              >
                <Paper
                  variant="elevation"
                  elevation={1}
                  className="login-background"
                  style={{ paddingBottom: '25px' }}
                >

                  <Grid item>
                    <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#fff', backgroundColor: 'orange', padding: '20px 0px', margin: '-65px', borderRadius: '10px 10px 0 0' }}>
                      <center style={{ fontSize: '24px' }}>Let us Know About Your Requrements</center></h1>


                    <p className="textAlignCen" /* style={{marginBottom:"12px"}} */>
                      <span className=""></span>
                      <span className="or"></span>
                      <span className=""></span>
                    </p>
                    <p className="proLogin" style={{ marginTop: '40px', fontSize: '16px' }}><center></center></p>
                    <div>

                      
                      <form id="msform" /* onSubmit={this.submitForm} */ className="tutorform">
                        <ul id="progressbar" className="progressbartutor">
                          <li class="active" id="account"><strong>1</strong></li>
                          <li id="personal"><strong>2</strong></li>
                          <li id="personal"><strong>3</strong></li>
                          <li id="payment"><strong>4</strong></li>
                          <li id="payment"><strong>5</strong></li>
                          <li id="account"><strong>6</strong></li>
                          <li id="confirm"><strong>7</strong></li>
                        </ul>
                        <fieldset>
                          <div class="form-card">



                            <div class="main_signup_holder errcls">
                              <h2 class="ohshap">Personal Details</h2>

                              <form method="post" action="" >
                                <input type="hidden" name="act" id="act" value="personalprofile" />

                                <input type="hidden" name="reg_locationid" id="reg_locationid" value="3" />
                                <input type="hidden" name="reg_location_name" id="reg_location_name" value="Delhi" />

                                <input type="hidden" id="tutor_source" name="tutor_source" value="" />

                                <input type="hidden" name="whereteach" id="whereteach" value="" />

                                <div class="inner_main_block">

                                  <div class="price_board_holder">

                                    <div class="price">
                                      <lable><span>*</span>Name</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Name"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="text" placeholder="Name" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>

                                      <div class="inputholder ">
                                        {/*  <form>
    <label class="radio-inline">
      <input type="radio" name="optradio" checked />Option 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio" />Option 2
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio" />Option 3
    </label></form> */}


                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>Date of Brith</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Date-of Brith"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="date" placeholder="Date of Brith" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>Whatsapp Number</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Whatsapp Number"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="number" placeholder="Whatsapp Number" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>Email</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Email"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="email" placeholder="Email" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>This Year I am in Class</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Class "
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="text" placeholder="Class" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>iI Like</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Like"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="text" placeholder="I Like" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>
                                      <lable><span>*</span>I don't Like</lable>
                                      <div class="inputholder ">
                                        <input
                                          name="Dislike"
                                          /* onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                    
                                          }}
                                    
                                    
                                          value={this.state.fees} */
                                          type="text" placeholder="i don't Like" /* data-segmentid="70" */ class="ratehourtutsub numericonly " maxlength="4" />
                                        <div class="error_message"></div>
                                      </div>

                                    </div>



                                  </div>








                                </div>


                              </form>
                            </div>




                          </div>
                          <input /* onClick={this.validation} */ type="button" name="next" class="next action-button" value="Next Step" /* disabled={this.state.formValidation} */ />
                        </fieldset>

                        <fieldset>
                          <div class="form-card">

                            <div class="shadow_inner_block errcls">
                              <div class="titlesubsection_block"><center><h3 style={{ textAlign: 'center' }}>Select Subject</h3></center></div>

                              <div class="segment_inner_section">
                                <ul>
                                  <ul><li>
                                    <div class="form-check">
                                      <input
                                        name="segment[]"
                                        value="Academic Enrichment"
                                        /* onClick={this.handleInputChange} */


                                        class="form-check-input checkBox" type="checkbox" id="defaultCheck1" />
                                      <label
                                        class="form-check-label ml-1" for="defaultCheck1">
                                        Academic Enrichment
                                                      </label>
                                    </div>
                                  </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Application  Enterprise Platform"
                                          /* onChange={this.handleInputChange} */
                                          class="form-check-input checkBox" type="checkbox" id="2" />
                                        <label


                                          class="form-check-label ml-1" for="2">
                                          Application / Enterprise Platform
                                                      </label>
                                      </div>

                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Basic Computer  Office"
                                          /* onChange={this.handleInputChange} */

                                          class="form-check-input checkBox" type="checkbox" id="221" />
                                        <label class="form-check-label ml-1" for="221">
                                          Basic Computer / Office
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Business Training"
                                          /* onChange={this.handleInputChange} */


                                          class="form-check-input checkBox" type="checkbox" id="3" />
                                        <label class="form-check-label ml-1" for="3">
                                          Business Training
                                                      </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="CA CPT"
                                          /* onChange={this.handleInputChange} */


                                          class="form-check-input checkBox" type="checkbox" id="5" />
                                        <label class="form-check-label ml-1" for="5">
                                          CA CPT
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Certification"
                                                           /*  onChange={this.handleInputChange} */ class="form-check-input checkBox" type="checkbox" id="6" />
                                        <label class="form-check-label ml-1" for="6">
                                          Certification
                                                      </label>
                                      </div>
                                    </li>

                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Class 1 - 5"
                                                           /*  onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="7" />
                                        <label class="form-check-label ml-1" for="7">
                                          Class 1 - 5
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Class 1 - 5"
                                                            /* onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="7" />
                                        <label class="form-check-label ml-1" for="7">
                                          Class 1 - 5
                                                      </label>
                                      </div>
                                    </li>


                                  </ul>
                                </ul>
                                <ul>
                                  <ul>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Class 11 - 12"
                                                           /*  onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="8" />
                                        <label class="form-check-label ml-1" for="8">
                                          Class 11 - 12
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="English Speaking"
                                                           /*  onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="9" />
                                        <label class="form-check-label ml-1" for="9">
                                          English Speaking
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Graphics & Multimedia"
                                                            /* onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="10" />
                                        <label class="form-check-label ml-1" for="10">
                                          Graphics & Multimedia
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Health & Fitness"
                                                            /* onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="11" />
                                        <label class="form-check-label ml-1" for="11">
                                          Health & Fitness
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Hobby Classes"
                                                            /* onChange={this.handleInputChange} */ class="form-check-input checkBox" type="checkbox" id="12" />
                                        <label class="form-check-label ml-1" for="12">
                                          Hobby Classes
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Languages"
                                                            /* onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="13" />
                                        <label class="form-check-label ml-1" for="13">
                                          Languages
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Law Subjects"
                                                         /*    onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="14" />
                                        <label class="form-check-label ml-1" for="14">
                                          Law Subjects
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          value="MBA & BBA"
                                          name="segment[]"
                                                         /*    onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" id="15" />
                                        <label class="form-check-label ml-1" for="15">
                                          MBA & BBA
                                                      </label>
                                      </div>
                                    </li>
                                  </ul>
                                </ul>

                                <ul>
                                  <ul>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                          /*   onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" value="Class 6 - 8" id="16" />
                                        <label class="form-check-label ml-1" for="16">
                                          Class 6 - 8
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                            /* onChange={this.handleInputChange} */ class="form-check-input checkBox" type="checkbox" value="Class 09 - 10" id="17" />
                                        <label class="form-check-label ml-1" for="17">
                                          Class 09 - 10
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                          /*   onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" value="College Level" id="18" />
                                        <label class="form-check-label ml-1" for="18">
                                          College Level
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                            /* onChange={this.handleInputChange} */ class="form-check-input checkBox" type="checkbox" value="Competitive Exams" id="19" />
                                        <label class="form-check-label ml-1" for="19">
                                          Competitive Exams
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                            /* onChange={this.handleInputChange} */ class="form-check-input checkBox" type="checkbox" value="Dance" id="20" />
                                        <label class="form-check-label ml-1" for="20">
                                          Dance
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                           /*  onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" value="Data Science/ DBMS" id="21" />
                                        <label class="form-check-label ml-1" for="21">
                                          Data Science/ DBMS
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                         /*    onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" value="Engineering Entrance & IITJEE" id="22" />
                                        <label class="form-check-label ml-1" for="22">
                                          Engineering Entrance & IITJEE
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                                           /*  onChange={this.handleInputChange}  */ class="form-check-input checkBox" type="checkbox" value="Engineering Subjcets" id="23" />
                                        <label class="form-check-label ml-1" for="23">
                                          Engineering Subjcets
                                                      </label>
                                      </div>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                          <input type="button" name="next" class="next action-button" value="Next Step" />
                        </fieldset>

                      
                        <fieldset>
                          <div class="form-card">
                            <h6 class="fs-title">Prefernce</h6>
                            <p>Where Would you Like to have you Tuition</p>

                            <div class="shadow_inner_block errcls">
                              <div class="segment_inner_section">
                                <ul>
                                  <ul><li>
                                    <div class="form-check">
                                      <input
                                        name="segment[]"
                                        value=" At tutor's Place"
                                        /* onClick={this.handleInputChange} */


                                        class="form-check-input checkBox" type="checkbox" id="defaultCheck1" />
                                      <label
                                        class="form-check-label ml-1" for="defaultCheck1">
                                        At tutor's Place
                                                      </label>
                                    </div>
                                  </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="At my place"
                                          /* onChange={this.handleInputChange} */
                                          class="form-check-input checkBox" type="checkbox" id="2" />
                                        <label


                                          class="form-check-label ml-1" for="2">
                                          At my place
                                                      </label>
                                      </div>

                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Basic Computer  Office"
                                          /* onChange={this.handleInputChange} */

                                          class="form-check-input checkBox" type="checkbox" id="221" />
                                        <label class="form-check-label ml-1" for="221">
                                          Insttute or Coaching Center
                                                      </label>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="form-check">
                                        <input
                                          name="segment[]"
                                          value="Onlline"
                                          /* onChange={this.handleInputChange} */


                                          class="form-check-input checkBox" type="checkbox" id="3" />
                                        <label class="form-check-label ml-1" for="3">
                                          Online
                                                      </label>
                                      </div>
                                    </li>


                                  </ul>
                                </ul>
                              </div>
                            </div>

                            {/* { <div class="price">
                                <lable><span>*</span>My Fees: INR</lable>
                                <div class="inputholder ">
                                  <input
                                    name="fees"
                                    onChange={(e) => {
                                       this.setState({
                                          [e.target.name]: e.target.value
                                       })

                                    }}


                                    value={this.state.fees}
                                    type="number" placeholder="Rate/Hour" data-segmentid="70" class="ratehourtutsub numericonly " maxlength="4" />
                                  <div class="error_message"></div>
                                </div>
                              </div> */}





                          </div>
                          <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                          <input type="button" name="next" class="next action-button" value="Next Step" />
                        </fieldset>


                        <fieldset>
                        <div class="form-card">
                          <div class="inner_main_block">

                            <div class="price_board_holder">
                            <h6 class="fs-title">Requiemrnts</h6>
                              <div class="price">
                                <form>
                                  <lable>Tell us Learning Requiemrnts(optional)</lable>
                                  <div class="inputholder ">
                                  <textarea id="w3review" name="w3review"  placeholder='type your full address' rows="4" cols="50">
  .
  </textarea>
                                    <div class="error_message"></div>
                                  </div>
                                </form>

                              </div>
                            
                            </div>
                            </div>
                            <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                          <input type="button" name="next" class="next action-button" value="Next Step" />
                          </div>
                        </fieldset>
                        <fieldset>
                          <div class="form-card">
                            <h6 class="fs-title">Basic details</h6>
                            <p>&nbsp;</p>
                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}

                               value={this.state.fullName} */
                              type="text" name="fullName" placeholder="Your full name" />


                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}


                               value={this.state.dateOfBarth} */
                              type="text" name="dateOfBarth" placeholder="Your date of birth" />



                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}


                               value={this.state.communicationAddress} */
                              type="text" name="communicationAddress" placeholder="Communication address" />



                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}
                               value={this.state.areaPinCode} */
                              type="text" name="areaPinCode" placeholder="your area pincode" />



                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}
                               value={this.state.phoneNumber} */
                              type="text" name="phoneNumber" placeholder="Your phone number" />

                            <h2 class="fs-title">Payment Information</h2>

                            <div class="radio-group">
                              <div
                                /*   onClick={() => {
                                     this.setState({ cardType: 'credit' })

                                  }} */

                                class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" alt='' />

                              </div>


                              <div
                                /* onClick={() => {
                                   this.setState({ cardType: 'paypal' })

                                }} */

                                class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" alt='' />
                              </div>
                            </div>



                            <label class="pay">Card Holder Name*</label>
                            <input
                              /*  onChange={(e) => {
                                  this.setState({
                                     [e.target.name]: e.target.value
                                  })
                               }}
                               value={this.state.cardHolderName} */
                              type="text" name="cardHolderName" placeholder="" />



                            <div class="row">
                              <div class="col-9">
                                <label class="pay">Card Number*</label>
                                <input
                                  /* onChange={(e) => {
                                     this.setState({
                                        [e.target.name]: e.target.value
                                     })
                                  }}

                                  value={this.state.cardNumber} */
                                  type="text" name="cardNumber" placeholder="" /> </div>
                              <div class="col-3">
                                <label class="pay">CVC*</label>
                                <input
                                  /*  onChange={(e) => {
                                      this.setState({
                                         [e.target.name]: e.target.value
                                      })
                                   }}

                                   value={this.state.cvc} */

                                  type="password" name="cvc" placeholder="***" /> </div>
                            </div>
                            <div class="row">
                              <div class="col-3"> <label class="pay">Expiry Date*</label> </div>
                              <div className="col-9">

                                <select

                                  /*  onChange={(e) => {
                                      this.setState({
                                         [e.target.name]: e.target.value
                                      })
                                   }} */


                                  class="list-dt" id="month" name="expiryMonth">
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
                                </select>
                                <select
                                  /*  onChange={(e) => {
                                      this.setState({
                                         [e.target.name]: e.target.value
                                      })
                                   }} */

                                  class="list-dt" id="year" name="expiryYear">
                                  <option selected>Year</option>
                                  <option value='2026'>2026</option>
                                  <option value='2025'>2025</option>
                                  <option value='2024'>2024</option>
                                  <option value='2023'>2023</option>
                                  <option value='2022'>2022</option>
                                  <option value='2021'>2021</option>
                                  <option value='2020'>2020</option>
                                  <option value='2019'>2019</option>
                                  <option value='2018'>2018</option>
                                  <option value='2017'>2017</option>
                                  <option value='2016'>2016</option>
                                  <option value='2015'>2015</option>
                                </select> </div>
                            </div>
                          </div> <input
                            type="button" name="previous" class="previous action-button-previous" value="Previous" />
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
                                <h5>Your Institute profile has been created</h5>
                                <p>&nbsp;</p>
                                <div class="complans">

                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
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

export default Student

