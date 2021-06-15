
import React, { Component } from 'react'
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import { data } from 'jquery';



class InstituteDetails extends Component {
   constructor (props) {
      super(props)
      // initialize your options array on your state
      this.state = {
         name: '',
         mobile: "",
         email: "",
         area: "",
         fullAddress: "",
         whatsApp: "",
         sameAsMobile: false,
         city: "",
         pinCode: "",
         classType: "",
         segment: {},
         fees: '',
         fullName: '',
         dateOfBarth: '',
         communicationAddress: '',
         areaPinCode: '',
         phoneNumber: '',
         cardType: '',
         cardHolderName: '',
         cardNumber: '',
         cvc: '',
         expiryYear: '',
         expiryMonth: '',


      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.validation = this.validation.bind(this);
   }


   handleInputChange = (event) => {


      const target = event.target;
      var value = target.value;
      var id = target.id

      if (target.checked) {

         this.state.segment[id] = value;

      }
      else {

      }


   }
   validation(event) {
      const { name, mobile, email, area, fullAddress, whatsApp, city, pinCode, classType, segment, fees, fullName, dateOfBarth, areaPinCode, phoneNumber, cardHolderName, cardNumber, cardType, communicationAddress, expiryMonth, expiryYear, sameAsMobile,
         cvc,
      } = this.state

      if (name === '') {
         this.setState({ formValidation: true })
      }
      alert("Button Clicked")
   }
   submitForm = (e) => {
      e.preventDefault()
      const { name, mobile, email, area, fullAddress, whatsApp, city, pinCode, classType, segment, fees, fullName, dateOfBarth, areaPinCode, phoneNumber, cardHolderName, cardNumber, cardType, communicationAddress, expiryMonth, expiryYear, sameAsMobile,
         cvc,
      } = this.state

      const data = {
         name: name,
         mobile: mobile,
         email: email,
         area: area,
         fullAddress: fullAddress,
         whatsApp: whatsApp,
         sameAsMobile: sameAsMobile,
         city: city,
         pinCode: pinCode,
         classType: classType,
         segment: segment,
         fees: fees,
         basicDetails: {
            fullName: fullName,
            dateOfBarth: dateOfBarth,
            areaPinCode: areaPinCode,
            phoneNumber: phoneNumber,
            communicationAddress: communicationAddress,
            paymentInformation: {
               cardType: cardType,
               cardHolderName: cardHolderName,
               cardNumber: cardNumber,
               cvc: cvc,
               expiryMonth: expiryMonth,
               expiryYear: expiryYear,
            }
         }
      }
      console.log(data);
      axios.post("http://localhost:3001/institute-details/", data)
         .then((res => {
            alert("Details Updated Successfully ")
            console.log(res);
         }))
         .catch(err => {
            alert(err.message)
            console.log(err)
         })
   }

   render() {

      return (
         <div class="container">
            <div className="row">
               <div className='portfolio'>


                  <div class="container-fluid" id="grad1">
                     <div class="row justify-content-center mt-0">
                        <div class="col-11 col-sm-10 col-md-10 col-lg-10 text-center p-0 mt-3 mb-2">
                           <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                              <h4>Let us know more about your self</h4>

                              <p>Fill all form field to go to next step</p>

                              <form id="msform" onSubmit={this.submitForm} className="tutorform">
                                 <ul id="progressbar" className="progressbartutor">
                                    <li class="active" id="account"><strong>Institute Details</strong></li>
                                    <li id="personal"><strong>Class type</strong></li>
                                    <li id="personal"><strong>Segment</strong></li>
                                    <li id="payment"><strong>Fees</strong></li>
                                    <li id="payment"><strong>Profile</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                 </ul>
                                 <fieldset>
                                    <div class="form-card">



                                       <div class="main_signup_holder errcls">
                                          <h2 class="ohshap">Insitute Details</h2>

                                          <form method="post" action="" >
                                             <input type="hidden" name="act" id="act" value="personalprofile" />

                                             <input type="hidden" name="reg_locationid" id="reg_locationid" value="3" />
                                             <input type="hidden" name="reg_location_name" id="reg_location_name" value="Delhi" />

                                             <input type="hidden" id="tutor_source" name="tutor_source" value="" />

                                             <input type="hidden" name="whereteach" id="whereteach" value="" />

                                             <div class="inner_main_block">



                                                <div class="require_text">* Required field</div>
                                                <div class="shadow_inner_block">

                                                   <div class="inner">

                                                      <div class="inputsection_holder errcls">
                                                         <label for="name"><span>*</span>Name: </label>
                                                         <input
                                                            onChange={(e) => {
                                                               this.setState({
                                                                  [e.target.name]: e.target.value
                                                               })
                                                            }}
                                                            value={this.state.name}
                                                            type="text" name="name" id="name" placeholder="Type your full name" class=""
                                                            required
                                                         />

                                                         <div class="error_message text-danger"></div>

                                                      </div>



                                                      <div class="inputsection_holder errcls">

                                                         <div class="inputsection_half_holder left">
                                                            <label for="mobile"><span>*</span>Mobile</label>
                                                            <input
                                                               name="mobile"
                                                               onChange={(e) => {
                                                                  this.setState({
                                                                     [e.target.name]: e.target.value
                                                                  })
                                                               }}
                                                               value={this.state.mobile}
                                                               type="text" id="mobile" placeholder="Enter mobile number" maxLength="10" class="numericonly " />

                                                            <div class="error_message"></div>

                                                         </div>

                                                         <div class="inputsection_half_holder right">

                                                            <label for="whatsappnumber">WhatsApp</label>
                                                            <input
                                                               name="whatsApp"
                                                               onChange={(e) => {
                                                                  this.setState({
                                                                     [e.target.name]: e.target.value
                                                                  })
                                                               }}
                                                               value={this.state.WhatsApp}

                                                               type="text" id="whatsappnumber" placeholder="Enter whatsapp number" maxLength="10" class="numericonly " />

                                                            <div className="samenumber_box">
                                                               <input
                                                                  name='sameAsMobile'
                                                                  onClick={e => {
                                                                     if (e.target.checked) {
                                                                        this.setState({
                                                                           [e.target.name]: true

                                                                        })
                                                                        console.log(this.state.sameAsMobile);
                                                                     } else {
                                                                        this.setState({ [e.target.name]: false })
                                                                     }


                                                                  }}

                                                                  type="checkbox" class="checkbox_same" id="checkbox_same" />Same as mobile number</div>

                                                            <div class="error_message"></div>

                                                         </div>

                                                         <div class="clear"></div>

                                                      </div>

                                                      <div class="inputsection_holder errcls">

                                                         <div class="inputsection_half_holder left">

                                                            <label for="email"><span>*</span>Email</label>
                                                            <input
                                                               name="email"
                                                               onChange={(e) => {
                                                                  this.setState({
                                                                     [e.target.name]: e.target.value
                                                                  })
                                                               }}
                                                               value={this.state.email}
                                                               type="email" id="email" placeholder="Enter email address" class="" />


                                                         </div>

                                                         <div class="inputsection_half_holder right">

                                                            <label for="reg_location"><span>*</span>City</label>

                                                            <div id="location_div_holder">


                                                               <select class="list-dt" id="month" name="city"

                                                                  onClick={(e) => {
                                                                     this.setState({
                                                                        [e.target.name]: e.target.value
                                                                     })

                                                                  }}

                                                               >
                                                                  <option value="">Select city</option>
                                                                  <option value="Agartala" data-name="Agartala">Agartala</option>
                                                                  <option value="15" data-name="Agra">Agra</option>
                                                                  <option value="8" data-name="Ahmedabad">Ahmedabad</option>
                                                                  <option value="23" data-name="Allahabad">Allahabad</option>
                                                                  <option value="26" data-name="Amritsar">Amritsar</option>
                                                                  <option value="98" data-name="Asansol">Asansol</option>
                                                                  <option value="30" data-name="Aurangabad">Aurangabad</option>
                                                                  <option value="6" data-name="Bangalore">Bangalore</option>
                                                                  <option value="69" data-name="Bathinda">Bathinda</option>
                                                                  <option value="99" data-name="Berhampur">Berhampur</option>
                                                                  <option value="76" data-name="Bharuch">Bharuch</option>
                                                                  <option value="27" data-name="Bhopal">Bhopal</option>
                                                                  <option value="18" data-name="Bhubaneswar">Bhubaneswar</option>
                                                                  <option value="78" data-name="Bikaner">Bikaner</option>
                                                                  <option value="74" data-name="Burdwan">Burdwan</option>
                                                                  <option value="79" data-name="Calicut">Calicut</option>
                                                                  <option value="10" data-name="Chandigarh">Chandigarh</option>
                                                                  <option value="5" data-name="Chennai">Chennai</option>
                                                                  <option value="45" data-name="Coimbatore">Coimbatore</option>
                                                                  <option value="57" data-name="Cuttack">Cuttack</option>
                                                                  <option value="68" data-name="Dehradun">Dehradun</option>
                                                                  <option value="3" selected="selected" data-name="Delhi">Delhi</option>
                                                                  <option value="32" data-name="Dhanbad">Dhanbad</option>
                                                                  <option value="33" data-name="Durgapur">Durgapur</option>
                                                                  <option value="35" data-name="Faridabad">Faridabad</option>
                                                                  <option value="34" data-name="Gandhinagar">Gandhinagar</option>
                                                                  <option value="58" data-name="Gaya">Gaya</option>
                                                                  <option value="95" data-name="Ghaziabad">Ghaziabad</option>
                                                                  <option value="37" data-name="Goa">Goa</option>
                                                                  <option value="17" data-name="Gurgaon">Gurgaon</option>
                                                                  <option value="19" data-name="Guwahati">Guwahati</option>
                                                                  <option value="40" data-name="Gwalior">Gwalior</option>
                                                                  <option value="96" data-name="Howrah">Howrah</option>
                                                                  <option value="7" data-name="Hyderabad">Hyderabad</option>
                                                                  <option value="28" data-name="Indore">Indore</option>
                                                                  <option value="11" data-name="Jaipur">Jaipur</option>
                                                                  <option value="61" data-name="Jalandhar">Jalandhar</option>
                                                                  <option value="91" data-name="Jammu">Jammu</option>
                                                                  <option value="16" data-name="Jamshedpur">Jamshedpur</option>
                                                                  <option value="72" data-name="Jhansi">Jhansi</option>
                                                                  <option value="25" data-name="Jodhpur">Jodhpur</option>
                                                                  <option value="63" data-name="Kanpur">Kanpur</option>
                                                                  <option value="65" data-name="Kharagpur">Kharagpur</option>
                                                                  <option value="36" data-name="Kochi">Kochi</option>
                                                                  <option value="73" data-name="Kolhapur">Kolhapur</option>
                                                                  <option value="1" data-name="Kolkata">Kolkata</option>
                                                                  <option value="70" data-name="Kota">Kota</option>
                                                                  <option value="24" data-name="Lucknow">Lucknow</option>
                                                                  <option value="54" data-name="Ludhiana">Ludhiana</option>
                                                                  <option value="75" data-name="Madurai">Madurai</option>
                                                                  <option value="94" data-name="Mangalore">Mangalore</option>
                                                                  <option value="67" data-name="Meerut">Meerut</option>
                                                                  <option value="77" data-name="Moradabad">Moradabad</option>
                                                                  <option value="4" data-name="Mumbai">Mumbai</option>
                                                                  <option value="29" data-name="Nagpur">Nagpur</option>
                                                                  <option value="97" data-name="Navi Mumbai">Navi Mumbai</option>
                                                                  <option value="80" data-name="Noida">Noida</option>
                                                                  <option value="92" data-name="Outside India">Outside India</option>
                                                                  <option value="88" data-name="Palakkad">Palakkad</option>
                                                                  <option value="62" data-name="Patiala">Patiala</option>
                                                                  <option value="31" data-name="Patna">Patna</option>
                                                                  <option value="9" data-name="Pune">Pune</option>
                                                                  <option value="64" data-name="Raipur">Raipur</option>
                                                                  <option value="71" data-name="Rajkot">Rajkot</option>
                                                                  <option value="20" data-name="Ranchi">Ranchi</option>
                                                                  <option value="84" data-name="Rourkela">Rourkela</option>
                                                                  <option value="81" data-name="Secundrabad">Secundrabad</option>
                                                                  <option value="2" data-name="Siliguri">Siliguri</option>
                                                                  <option value="14" data-name="Surat">Surat</option>
                                                                  <option value="86" data-name="Thiruchirappalli">Thiruchirappalli</option>
                                                                  <option value="12" data-name="Thiruvananthapuram">Thiruvananthapuram</option>
                                                                  <option value="13" data-name="Vadodara">Vadodara</option>
                                                                  <option value="22" data-name="Varanasi">Varanasi</option>
                                                                  <option value="38" data-name="Vijayawada">Vijayawada</option>
                                                                  <option value="39" data-name="Visakhapatnam">Visakhapatnam</option>
                                                               </select>





                                                            </div>

                                                         </div>

                                                         <div class="clear"></div>

                                                      </div>

                                                      <div class="inputsection_holder errcls">

                                                         <div class="inputsection_half_holder left">

                                                            <label for="auto_area_list"><span>*</span>Area</label>

                                                            <input type="text" name="area"
                                                               onChange={(e) => {
                                                                  this.setState({
                                                                     [e.target.name]: e.target.value
                                                                  })
                                                               }}
                                                               value={this.state.area}
                                                               placeholder="Enter area" id="auto_area_list" className="ui-autocomplete-input"
                                                               autoComplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />

                                                            <div class="infotext">Mention prefered teaching locations <font id="curarea">(Ex: Kalkaji)</font></div>



                                                         </div>

                                                         <div class="inputsection_half_holder right">

                                                            <label htmlFor="pincode"><span>*</span>Pin Code</label>

                                                            <input type="text" name="pinCode"
                                                               onChange={(e) => {
                                                                  this.setState({
                                                                     [e.target.name]: e.target.value
                                                                  })
                                                               }}
                                                               value={this.state.pinCode}

                                                               id="pincode" placeholder="Enter pin code" maxLength="6" class="numericonly " />

                                                            <div class="error_message"></div>

                                                         </div>

                                                         <div class="clear"></div>

                                                      </div>

                                                      <div class="inputsection_holder  ">
                                                         <label for="address">Address</label>
                                                         <textarea placeholder="Type your full address" id="address" name="fullAddress"
                                                            onChange={(e) => {
                                                               this.setState({
                                                                  [e.target.name]: e.target.value
                                                               })
                                                            }}
                                                            value={this.state.fullAddress}

                                                         ></textarea>

                                                      </div>


                                                   </div>
                                                </div>





                                             </div>


                                          </form>
                                       </div>




                                    </div>
                                    <input onClick={this.validation} type="button" name="next" class="next action-button" value="Next Step" disabled={this.state.formValidation} />
                                 </fieldset>

                                 <fieldset>
                                    <div class="form-card">
                                       <h6 class="fs-title">We are interested in</h6>
                                       <p>&nbsp;</p>
                                       <div class="center_new_block ">

                                          <div class="left_block">
                                             <ul class="joinastutor_radio_list">
                                                <li >
                                                   <input id="face" class="joinastutor_radio_inp" type="radio" name="classType"
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'face-to-face' })

                                                      }
                                                      }

                                                      value="1" />
                                                   <label
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'face-to-face' })

                                                      }
                                                      }
                                                      className="joinastutor_label" htmlFor="face">Face to Face Tutoring</label>


                                                </li>
                                                <li>
                                                   <input id="online_tutoring" className="joinastutor_radio_inp" type="radio" name="classType"
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'Online Tutoring' })

                                                      }}

                                                      value="2" />
                                                   <label
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'Online Tutoring' })
                                                      }}

                                                      class="joinastutor_label" for="online_tutoring">Online Tutoring</label>
                                                </li>
                                                <li>
                                                   <input id="both" class="joinastutor_radio_inp" type="radio" name="classType"
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'Both Face to Face &Online Tutoring' })
                                                      }}


                                                      value="3" />
                                                   <label
                                                      onClick={(e) => {
                                                         this.setState({ classType: 'Both Face to Face &Online Tutoring' })
                                                      }}
                                                      class="joinastutor_label" for="both"><span>Both Face to Face &amp; Online Tutoring</span></label>
                                                </li>
                                             </ul>


                                          </div>

                                       </div>
                                    </div>
                                    <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" class="next action-button" value="Next Step" />
                                 </fieldset>

                                 <fieldset>
                                    <div class="form-card">

                                       <div class="shadow_inner_block errcls">
                                          <div class="titlesubsection_block"><h3>You can select maximum 6 segments</h3></div>

                                          <div class="segment_inner_section">
                                             <ul>
                                                <ul><li>
                                                   <div class="form-check">
                                                      <input
                                                         name="segment[]"
                                                         value="Academic Enrichment"
                                                         onClick={this.handleInputChange}


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
                                                            onChange={this.handleInputChange}
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
                                                            onChange={this.handleInputChange}

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
                                                            onChange={this.handleInputChange}


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
                                                            onChange={this.handleInputChange}


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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="6" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="7" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="7" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="8" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="9" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="10" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="11" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="12" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="13" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="14" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" id="15" />
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
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Class 6 - 8" id="16" />
                                                         <label class="form-check-label ml-1" for="16">
                                                            Class 6 - 8
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Class 09 - 10" id="17" />
                                                         <label class="form-check-label ml-1" for="17">
                                                            Class 09 - 10
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="College Level" id="18" />
                                                         <label class="form-check-label ml-1" for="18">
                                                            College Level
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Competitive Exams" id="19" />
                                                         <label class="form-check-label ml-1" for="19">
                                                            Competitive Exams
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Dance" id="20" />
                                                         <label class="form-check-label ml-1" for="20">
                                                            Dance
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Data Science/ DBMS" id="21" />
                                                         <label class="form-check-label ml-1" for="21">
                                                            Data Science/ DBMS
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Engineering Entrance & IITJEE" id="22" />
                                                         <label class="form-check-label ml-1" for="22">
                                                            Engineering Entrance & IITJEE
                                                      </label>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div class="form-check">
                                                         <input
                                                            name="segment[]"
                                                            onChange={this.handleInputChange} class="form-check-input checkBox" type="checkbox" value="Engineering Subjcets" id="23" />
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
                                       <h6 class="fs-title">Choose your fees</h6>
                                       <p>&nbsp;</p>

                                       <div class="price_board_holder">

                                          <div class="price">
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
                                          </div>



                                       </div>

                                    </div>
                                    <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" class="next action-button" value="Next Step" />
                                 </fieldset>



                                 <fieldset>
                                    <div class="form-card">
                                       <h6 class="fs-title">Basic details</h6>
                                       <p>&nbsp;</p>
                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}

                                          value={this.state.fullName}
                                          type="text" name="fullName" placeholder="Your full name" />


                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}


                                          value={this.state.dateOfBarth}
                                          type="text" name="dateOfBarth" placeholder="Your date of birth" />



                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}


                                          value={this.state.communicationAddress}
                                          type="text" name="communicationAddress" placeholder="Communication address" />



                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}
                                          value={this.state.areaPinCode}
                                          type="text" name="areaPinCode" placeholder="your area pincode" />



                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}
                                          value={this.state.phoneNumber}
                                          type="text" name="phoneNumber" placeholder="Your phone number" />

                                       <h2 class="fs-title">Payment Information</h2>

                                       <div class="radio-group">
                                          <div
                                             onClick={() => {
                                                this.setState({ cardType: 'credit' })

                                             }}

                                             class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" alt='' />

                                          </div>


                                          <div
                                             onClick={() => {
                                                this.setState({ cardType: 'paypal' })

                                             }}

                                             class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" alt='' />
                                          </div>
                                       </div>



                                       <label class="pay">Card Holder Name*</label>
                                       <input
                                          onChange={(e) => {
                                             this.setState({
                                                [e.target.name]: e.target.value
                                             })
                                          }}
                                          value={this.state.cardHolderName}
                                          type="text" name="cardHolderName" placeholder="" />



                                       <div class="row">
                                          <div class="col-9">
                                             <label class="pay">Card Number*</label>
                                             <input
                                                onChange={(e) => {
                                                   this.setState({
                                                      [e.target.name]: e.target.value
                                                   })
                                                }}

                                                value={this.state.cardNumber}
                                                type="text" name="cardNumber" placeholder="" /> </div>
                                          <div class="col-3">
                                             <label class="pay">CVC*</label>
                                             <input
                                                onChange={(e) => {
                                                   this.setState({
                                                      [e.target.name]: e.target.value
                                                   })
                                                }}

                                                value={this.state.cvc}

                                                type="password" name="cvc" placeholder="***" /> </div>
                                       </div>
                                       <div class="row">
                                          <div class="col-3"> <label class="pay">Expiry Date*</label> </div>
                                          <div className="col-9">

                                             <select

                                                onChange={(e) => {
                                                   this.setState({
                                                      [e.target.name]: e.target.value
                                                   })
                                                }}


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
                                                onChange={(e) => {
                                                   this.setState({
                                                      [e.target.name]: e.target.value
                                                   })
                                                }}

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
                        </div>
                     </div>
                  </div>










               </div>

            </div >

         </div >
      )
   }
}
export default InstituteDetails;