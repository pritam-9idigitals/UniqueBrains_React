import React, { Component } from 'react'
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


const options = [
   {
      label: 'Web development',
      options: [
         { value: 'HTML', label: 'HTML' },
         { value: 'CSS', label: 'CSS' },
         { value: 'Javascript', label: 'Javascript' },
         { value: 'Jquery', label: 'Jquery' },
         { value: 'Bootstrap', label: 'Bootstrap' },
         { value: 'Angular', label: 'Angular' },
         { value: 'React JS', label: 'React JS' },
         { value: 'Node JS', label: 'Node JS' },
      ],
   },
   {
      label: 'Mobile development',
      options: [
         { value: 'Android', label: 'Android' },
         { value: 'IOS', label: 'IOS' },
         { value: 'Flutter', label: 'Flutter' },
         { value: 'React Native', label: 'React Native' },
         { value: 'Ionic', label: 'Ionic' },
      ],
   },
   {
      label: 'Software development',
      options: [
         { value: 'PHP', label: 'PHP' },
         { value: 'Python', label: 'Python' },
         { value: 'Java', label: 'Java' },
         { value: '.Net', label: '.Net' },
      ],
   },
];

class Tutordetails extends Component {
   constructor (props) {
      super(props)
      // initialize your options array on your state
      this.state = {
         selected: ['one'],
         options: []

      }
   }
   onChange = (selected) => {
      this.setState({ selected });
   };

   onChange(e) {
      // current array of options
      const options = this.state.options
      let index

      // check if the check box is checked or unchecked
      if (e.target.checked) {
         // add the numerical value of the checkbox to options array
         options.push(+e.target.value)
      } else {
         // or remove the value from the unchecked checkbox from the array
         index = options.indexOf(+e.target.value)
         options.splice(index, 1)
      }

      // update the state with the new array of options
      this.setState({ options: options })
      console.log(this.state.options);
   }

   render() {
      const { selected } = this.state;
      return (
         <div className="container">
            <div className="row">
               <div className='portfolio'>


                  <div className="container-fluid" id="grad1">
                     <div className="row justify-content-center mt-0">
                        <div className="col-11 col-sm-10 col-md-10 col-lg-10 text-center p-0 mt-3 mb-2">
                           <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                              <h4>Let us know more about your self</h4>

                              <p>Fill all form field to go to next step</p>

                              <form id="msform" className="tutorform">
                                 <ul id="progressbar" className="progressbartutor">
                                    <li className="active" id="account"><strong>Personal Profile</strong></li>
                                    <li id="personal"><strong>Class type</strong></li>
                                    <li id="personal"><strong>Segment</strong></li>
                                    <li id="payment"><strong>Fees</strong></li>
                                    <li id="payment"><strong>Profile</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                 </ul>
                                 <fieldset>
                                    <div className="form-card">




                                       <div className="main_signup_holder errcls">
                                          <h2 className="ohshap">Personal Profile</h2>

                                          <form method="post" action="" >
                                             <input type="hidden" name="act" id="act" value="personalprofile" />

                                             <input type="hidden" name="reg_locationid" id="reg_locationid" value="3" />
                                             <input type="hidden" name="reg_location_name" id="reg_location_name" value="Delhi" />

                                             <input type="hidden" id="tutor_source" name="tutor_source" value="" />

                                             <input type="hidden" name="whereteach" id="whereteach" value="" />

                                             <div className="inner_main_block">



                                                <div className="require_text">* Required field</div>
                                                <div className="shadow_inner_block">

                                                   <div className="inner">

                                                      <div className="inputsection_holder errcls">
                                                         <label for="name"><span>*</span>Name: </label>
                                                         <input type="text" name="name" id="name" placeholder="Type your full name" value="K Singh" className="" />

                                                         <div className="error_message"></div>

                                                      </div>

                                                      <div className="inputsection_holder errcls">

                                                         <div className="inputsection_half_holder left">

                                                            <label for="gender"><span>*</span>Gender</label>

                                                            <div >
                                                               <select className="list-dt" id="month" name="expmonth">
                                                                  <option value="">Select gender</option>
                                                                  <option value="male">Male</option>
                                                                  <option value="female">Female</option>
                                                               </select>



                                                            </div>
                                                            <div className="error_message"></div>

                                                         </div>

                                                         <div className="inputsection_half_holder right">

                                                            <label for="age"><span>*</span>Year of birth</label>

                                                            <input type="text" name="age" id="age" placeholder="Type birth year (Ex.1990)" value="" className="numericonly " maxlength="4" />

                                                            <div className="error_message"></div>

                                                         </div>

                                                         <div className="clear"></div>

                                                      </div>

                                                      <div className="inputsection_holder errcls">

                                                         <div className="inputsection_half_holder left">
                                                            <label for="mobile"><span>*</span>Mobile</label>
                                                            <input type="text" name="mobile" id="mobile" placeholder="Enter mobile number" maxlength="10" value="" className="numericonly " />

                                                            <div className="error_message"></div>

                                                         </div>

                                                         <div className="inputsection_half_holder right">

                                                            <label for="whatsappnumber">WhatsApp</label>
                                                            <input type="text" name="whatsappnumber" id="whatsappnumber" placeholder="Enter whatsapp number" value="" maxlength="10" className="numericonly " />

                                                            <div className="samenumber_box"><input type="checkbox" className="checkbox_same" id="checkbox_same" />Same as mobile number</div>

                                                            <div className="error_message"></div>

                                                         </div>

                                                         <div className="clear"></div>

                                                      </div>

                                                      <div className="inputsection_holder errcls">

                                                         <div className="inputsection_half_holder left">

                                                            <label for="email"><span>*</span>Email</label>
                                                            <input type="text" name="email" id="email" placeholder="Enter email address" value="kparihar.mca@gmail.com" className="" />


                                                         </div>

                                                         <div className="inputsection_half_holder right">

                                                            <label for="reg_location"><span>*</span>City</label>

                                                            <div id="location_div_holder">


                                                               <select className="list-dt" id="month" name="expmonth">
                                                                  <option value="">Select city</option>
                                                                  <option value="21" data-name="Agartala">Agartala</option>
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

                                                         <div className="clear"></div>

                                                      </div>

                                                      <div className="inputsection_holder errcls">

                                                         <div className="inputsection_half_holder left">

                                                            <label for="auto_area_list"><span>*</span>Area</label>

                                                            <input type="text" name="area" placeholder="Enter area" id="auto_area_list" value="" className="ui-autocomplete-input"
                                                               autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />

                                                            <div className="infotext">Mention prefered teaching locations <font id="curarea">(Ex: Kalkaji)</font></div>



                                                         </div>

                                                         <div className="inputsection_half_holder right">

                                                            <label for="pincode"><span>*</span>Pin Code</label>

                                                            <input type="text" name="pincode" id="pincode" placeholder="Enter pin code" value="" maxlength="6" className="numericonly " />

                                                            <div className="error_message"></div>

                                                         </div>

                                                         <div className="clear"></div>

                                                      </div>

                                                      <div className="inputsection_holder  ">
                                                         <label for="address">Address</label>
                                                         <textarea placeholder="Type your full address" id="address" name="address" value=""></textarea>

                                                      </div>


                                                   </div>
                                                </div>





                                             </div>


                                          </form>
                                       </div>





























                                    </div>
                                    <input type="button" name="next" className="next action-button" value="Next Step" />
                                 </fieldset>

                                 <fieldset>
                                    <div className="form-card">
                                       <h6 className="fs-title">I am interested in</h6>
                                       <p>&nbsp;</p>
                                       <div className="center_new_block ">

                                          <div className="left_block">
                                             <ul className="joinastutor_radio_list">
                                                <li>
                                                   <input id="face" className="joinastutor_radio_inp" type="radio" name="signuppreference" value="1" checked="" />
                                                   <label className="joinastutor_label" for="face">Face to Face Tutoring</label>
                                                </li>
                                                <li>
                                                   <input id="online_tutoring" className="joinastutor_radio_inp" type="radio" name="signuppreference" value="2" />
                                                   <label className="joinastutor_label" for="online_tutoring">Online Tutoring</label>
                                                </li>
                                                <li>
                                                   <input id="both" className="joinastutor_radio_inp" type="radio" name="signuppreference" value="3" />
                                                   <label className="joinastutor_label" for="both"><span>Both Face to Face &amp; Online Tutoring</span></label>
                                                </li>
                                             </ul>


                                          </div>

                                       </div>
                                    </div>
                                    <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" className="next action-button" value="Next Step" />
                                 </fieldset>

                                 <fieldset>
                                    <div className="form-card">

                                       <div className="shadow_inner_block errcls">
                                          <div className="titlesubsection_block"><h3>You can select maximum 6 segments</h3></div>

                                          <div className="segment_inner_section">
                                             <ul>
                                                <ul><li>
                                                   <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check62" value="62" />
                                                   <label className="seg_label_txt segment_lebel_txt" for="seg_check62">Academic Enrichment</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check70" value="70" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check70">Application / Enterprise Platform</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check69" value="69" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check69">Basic Computer / Office</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check28" value="28" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check28">Business Training</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check27" value="27" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check27">CA CPT</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check72" value="72" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check72">Certification</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check5" value="5" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check5">Class 1 - 5</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check7" value="7" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check7">Class 11 - 12</label></li></ul>			</ul>
                                             <ul>
                                                <ul><li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check64" value="64" /><
                                                   label className="seg_label_txt segment_lebel_txt" for="seg_check64">Class 6 - 8</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check6" value="6" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check6">Class 9 - 10</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check9" value="9" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check9">College Level</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check65" value="65" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check65">Competitive Exams</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check36" value="36" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check36">Dance</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check71" value="71" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check71">Data Science / DBMS</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check11" value="11" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check11">Engineering Entrance &amp; IITJEE</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check13" value="13" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check13">Engineering Subjects</label></li></ul>			</ul>
                                             <ul>
                                                <ul><li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check12" value="12" />
                                                   <label className="seg_label_txt segment_lebel_txt" for="seg_check12">English Speaking</label></li><li>
                                                      <input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check66" value="66" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check66">Graphics &amp; Multimedia</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check63" value="63" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check63">Health &amp; Fitness</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check33" value="33" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check33">Hobby Classes</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check22" value="22" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check22">Languages</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check26" value="26" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check26">Law Subjects</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check24" value="24" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check24">MBA &amp; BBA</label></li>
                                                   <li><input type="checkbox" className="seg_check_input segchoose" name="memberseg[]" id="seg_check37" value="37" />
                                                      <label className="seg_label_txt segment_lebel_txt" for="seg_check37">Medical Entrance &amp; AIPMT</label></li></ul>			</ul>
                                          </div>
                                       </div>
                                    </div>
                                    <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" className="next action-button" value="Next Step" />
                                 </fieldset>


                                 <fieldset>
                                    <div className="form-card">
                                       <h6 className="fs-title">Choose your fees</h6>
                                       <p>&nbsp;</p>

                                       <div className="price_board_holder">

                                          <div className="price">
                                             <lable><span>*</span>My Fees: INR</lable>
                                             <div className="inputholder ">
                                                <input type="text" name="rate[70]" placeholder="Rate/Hour" data-segmentid="70" className="ratehourtutsub numericonly " maxlength="4" value="" />
                                                <div className="error_message"></div>
                                             </div>
                                          </div>



                                       </div>

                                    </div>
                                    <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" className="next action-button" value="Next Step" />
                                 </fieldset>




                                 <fieldset>
                                    <div className="form-card">
                                       <h6 className="fs-title">Profile details</h6>
                                       <p>&nbsp;</p>


                                       <div className="inner">
                                          <div className="inputsection_holder errcls education_section_block_parent">
                                             <label for=""><span>*</span>Education:
                                                             <a href="#" className="tutsignupqualaddmore tutsignupqualadd">+ Add More</a>
                                                <div className="clear"></div></label>

                                             <div className="education_section_block">

                                                <div className="qualificationholder">

                                                   <div className="inputsection_half_holder left">
                                                      <div>
                                                         <select className="list-dt" id="month" name="expmonth">
                                                            <option value="">Qualification</option>
                                                            <option value="1">B.Tech/B.E.</option>
                                                            <option value="2">Diploma</option>
                                                            <option value="3">B.Sc</option>
                                                            <option value="4">B.Com</option>
                                                            <option value="5">B.A</option>
                                                            <option value="6">B.Arch</option>
                                                            <option value="7">B.B.A</option>
                                                            <option value="8">B.Ed</option>
                                                            <option value="9">B.Pharma</option>
                                                            <option value="10">BCA</option>
                                                            <option value="11">BDS</option>
                                                            <option value="12">BHM</option>
                                                            <option value="13">BVSC</option>
                                                            <option value="14">LLB</option>
                                                            <option value="15">MBBS</option>
                                                            <option value="16">MBA/PGDM</option>
                                                            <option value="17">M.Tech</option>
                                                            <option value="18">MCA</option>
                                                            <option value="19">M.Sc</option>
                                                            <option value="20">CA</option>
                                                            <option value="21">CS</option>
                                                            <option value="22">ICWA</option>
                                                            <option value="23">Integrated PG</option>
                                                            <option value="24">LLM</option>
                                                            <option value="25">M.A</option>
                                                            <option value="26">M.Arch</option>
                                                            <option value="27">M.Com</option>
                                                            <option value="28">M.Ed</option>
                                                            <option value="29">M.Pharma</option>
                                                            <option value="30">M.S/M.D</option>
                                                            <option value="31">MVSC</option>
                                                            <option value="32">PG Diploma</option>
                                                            <option value="33">Any Doctorate</option>
                                                            <option value="34">Ph.D</option>
                                                            <option value="35">M.Phil</option>
                                                            <option value="36">Not Applicable</option>
                                                            <option value="37">10th</option>
                                                            <option value="38">12th</option>
                                                            <option value="39">Mass Media</option>

                                                         </select>

                                                      </div>

                                                   </div>

                                                   <div className="inputsection_half_holder right">

                                                      <div>
                                                         <select className="list-dt" id="month" name="expmonth">
                                                            <option value="">Year</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>
                                                            <option value="2015">2015</option>
                                                            <option value="2014">2014</option>
                                                            <option value="2013">2013</option>
                                                            <option value="2012">2012</option>
                                                            <option value="2011">2011</option>
                                                            <option value="2010">2010</option>
                                                            <option value="2009">2009</option>
                                                            <option value="2008">2008</option>
                                                            <option value="2007">2007</option>
                                                            <option value="2006">2006</option>
                                                            <option value="2005">2005</option>
                                                            <option value="2004">2004</option>
                                                            <option value="2003">2003</option>
                                                            <option value="2002">2002</option>
                                                            <option value="2001">2001</option>
                                                            <option value="2000">2000</option>
                                                            <option value="1999">1999</option>
                                                            <option value="1998">1998</option>
                                                            <option value="1997">1997</option>
                                                            <option value="1996">1996</option>
                                                            <option value="1995">1995</option>
                                                            <option value="1994">1994</option>
                                                            <option value="1993">1993</option>
                                                            <option value="1992">1992</option>
                                                            <option value="1991">1991</option>
                                                            <option value="1990">1990</option>
                                                            <option value="1989">1989</option>
                                                            <option value="1988">1988</option>
                                                            <option value="1987">1987</option>
                                                            <option value="1986">1986</option>
                                                            <option value="1985">1985</option>
                                                            <option value="1984">1984</option>
                                                            <option value="1983">1983</option>
                                                            <option value="1982">1982</option>
                                                            <option value="1981">1981</option>
                                                            <option value="1980">1980</option>
                                                            <option value="1979">1979</option>
                                                            <option value="1978">1978</option>
                                                            <option value="1977">1977</option>
                                                            <option value="1976">1976</option>
                                                            <option value="1975">1975</option>
                                                            <option value="1974">1974</option>
                                                            <option value="1973">1973</option>
                                                            <option value="1972">1972</option>
                                                            <option value="1971">1971</option>
                                                            <option value="1970">1970</option>
                                                            <option value="1969">1969</option>
                                                            <option value="1968">1968</option>
                                                            <option value="1967">1967</option>
                                                            <option value="1966">1966</option>
                                                            <option value="1965">1965</option>
                                                            <option value="1964">1964</option>
                                                            <option value="1963">1963</option>
                                                            <option value="1962">1962</option>
                                                            <option value="1961">1961</option>
                                                            <option value="1960">1960</option>
                                                            <option value="1959">1959</option>
                                                            <option value="1958">1958</option>
                                                            <option value="1957">1957</option>
                                                            <option value="1956">1956</option>
                                                            <option value="1955">1955</option>
                                                            <option value="1954">1954</option>
                                                            <option value="1953">1953</option>
                                                            <option value="1952">1952</option>
                                                            <option value="1951">1951</option>
                                                            <option value="1950">1950</option>
                                                            <option value="1949">1949</option>
                                                            <option value="1948">1948</option>
                                                            <option value="1947">1947</option>
                                                            <option value="1946">1946</option>
                                                            <option value="1945">1945</option>
                                                            <option value="1944">1944</option>
                                                            <option value="1943">1943</option>
                                                            <option value="1942">1942</option>
                                                            <option value="1941">1941</option>
                                                            <option value="1940">1940</option>

                                                         </select>

                                                      </div>


                                                   </div>

                                                   <div className="clear"></div>



                                                   <div className="institute_name">
                                                      <input type="text" name="tutorqualinst[]" className="qualinstitute" placeholder="Institute Name" value="" />

                                                      <div className="autosuggest_small mCustomScrollbar _mCS_1 mCS_no_scrollbar" >
                                                         <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabIndex="0" >
                                                            <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" dir="ltr">
                                                               <ul className="autosuggestinst"></ul>
                                                            </div>
                                                            <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" >
                                                               <a href="#" className="mCSB_buttonUp" onContextMenu="return false;"></a>
                                                               <div className="mCSB_draggerContainer">
                                                                  <div id="mCSB_1_dragger_vertical" className="mCSB_dragger" onContextMenu="return false;">
                                                                     <div className="mCSB_dragger_bar" ></div></div>
                                                                  <div className="mCSB_draggerRail"></div></div>
                                                               <a href="#" className="mCSB_buttonDown" onContextMenu="return false;"></a></div></div></div>

                                                   </div>

                                                   <div className="clear"></div>

                                                </div>

                                             </div>
                                          </div>
                                          <div className="inputsection_holder errcls">
                                             <label><span>*</span>Tutoring experience:</label>
                                             <div >
                                                <select className="list-dt" id="month" name="expmonth">

                                                   <option value="">Select Experience</option>
                                                   <option value="0">No Previous Experience</option>

                                                   <option value="1">1 year</option><option value="2">2 years</option><option value="3">3 years</option>
                                                   <option value="4">4 years</option><option value="5">5 years</option><option value="6">6 years</option>
                                                   <option value="7">7 years</option><option value="8">8 years</option><option value="9">9 years</option>
                                                   <option value="10">10 years</option><option value="11">11 years</option><option value="12">12 years</option>
                                                   <option value="13">13 years</option><option value="14">14 years</option><option value="15">15 years</option>
                                                   <option value="16">16 years</option><option value="17">17 years</option><option value="18">18 years</option>
                                                   <option value="19">19 years</option><option value="20">20 years</option><option value="21">21 years</option>
                                                   <option value="22">22 years</option><option value="23">23 years</option><option value="24">24 years</option>
                                                   <option value="25">25 years</option>
                                                   <option value="more_than_25">More Than 25 years</option>

                                                </select>
                                             </div>
                                             <div className="error_message"></div>
                                          </div>

                                          <div className="inputsection_holder errcls err_exp_msg ">
                                             <label for="exprdetail"><span>*</span>Details about you:</label>
                                             <div className="details_block_section  experience_details">
                                                <textarea onKeyUp="slicer()" placeholder="Tutoring experience details" name="exprdetail" id="exprdetail" className="exprdetail_length" maxlength="500"></textarea>
                                                <div className="instruction_block">
                                                   <div className="cha_count overview_count"><span id="exp_count_text">Minimum Characters : 50</span></div>
                                                   <h4>You can write about:</h4>
                                                   <p>About your teaching experience, style of teaching, your strengths, your qualifications etc.
                                                                        The more detail you provide the greater chance you have of attracting potential students</p>
                                                </div>

                                             </div>

                                          </div>

                                          <div className="inputsection_holder errcls err_rmrk_msg">
                                             <label for="remarks">Tutoring approach:</label>
                                             <div className="details_block_section  experience_remarks ">

                                                <textarea placeholder="Tutoring approch details" onkeyup="remarks_count()" name="remarks" id="remarks"
                                                   className="remarks_length" maxlength="500"></textarea>
                                                <div className="instruction_block">
                                                   <div className="cha_count overview_count"><span id="remarks_count_text">Minimum Characters : 50 </span></div>
                                                   <h4>You can write about:</h4>
                                                   <p>How you plan your lessons, Your tutoring techniques, Your tutoring specialities etc.</p>
                                                </div>
                                             </div>
                                             <div className="error_message"></div>
                                          </div>

                                       </div>



                                    </div>
                                    <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                    <input type="button" name="next" className="next action-button" value="Next Step" />
                                 </fieldset>









                                 <fieldset>
                                    <div className="form-card">
                                       <h6 className="fs-title">Basic details</h6>
                                       <p>&nbsp;</p>
                                       <input type="text" name="full-name" placeholder="Your full name" />

                                       <input type="text" name="dateofbirth" placeholder="Your date of birth" />

                                       <input type="text" name="address" placeholder="Communication address" />
                                       <input type="text" name="pincode" placeholder="your area pincode" />
                                       <input type="text" name="phonenumber" placeholder="Your phone number" />

                                       <h2 className="fs-title">Payment Information</h2>
                                       <div className="radio-group">
                                          <div className='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" />

                                          </div>
                                          <div className='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" />
                                          </div>
                                       </div>
                                       <label className="pay">Card Holder Name*</label> <input type="text" name="holdername" placeholder="" />
                                       <div className="row">
                                          <div className="col-9"> <label className="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                          <div className="col-3"> <label className="pay">CVC*</label> <input type="password" name="cvcpwd" placeholder="***" /> </div>
                                       </div>
                                       <div className="row">
                                          <div className="col-3"> <label className="pay">Expiry Date*</label> </div>
                                          <div className="col-9"> <select className="list-dt" id="month" name="expmonth">
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
                                          </select> <select className="list-dt" id="year" name="expyear">
                                                <option selected>Year</option>
                                             </select> </div>
                                       </div>
                                    </div> <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                    <input type="button" name="make_payment" className="next action-button" value="Confirm" />
                                 </fieldset>

                                 <fieldset>
                                    <div className="form-card">
                                       <h2 className="fs-title text-center">Success !</h2>
                                       <div className="row justify-content-center">
                                          <div className="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" /> </div>
                                       </div>
                                       <div className="row justify-content-center">
                                          <div className="col-7 text-center">
                                             <h5>Your profile has been created</h5>
                                             <p>&nbsp;</p>
                                             <div className="complans">

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
export default Tutordetails;