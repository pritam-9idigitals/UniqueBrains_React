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

class PostRequirement extends Component {
    constructor() {
        super()
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
            <div class="container">
                <div className="row">
                    <div className='portfolio'>


                        <div class="container-fluid" id="grad1">
                            <div class="row justify-content-center mt-0">
                                <div class="col-11 col-sm-10 col-md-10 col-lg-10 text-center p-0 mt-3 mb-2">
                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                        <h4>Let us know about your requirements</h4>

                                        <p>Fill all form field to go to next step</p>

                                        <form id="msform" class="tutorform">
                                            <ul id="progressbar" className="progressbartutor">
                                                <li class="active" id="account"><strong>Subject</strong></li>
                                                <li id="personal"><strong>City & Area</strong></li>
                                                <li id="personal"><strong>Preference</strong></li>
                                                <li id="payment"><strong>Requirements</strong></li>
                                                <li id="payment"><strong>Contact</strong></li>
                                                <li id="confirm"><strong>Finish</strong></li>
                                            </ul>
                                            <fieldset>
                                                <div class="form-card subjectdetails">
                                                    <h6 class="fs-title">Select Subject</h6>

                                                    <div class="shadow_inner_block errcls">


                                                        <div class="segment_inner_section">
                                                            <ul>
                                                                <ul><li>
                                                                    <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check62" value="62" />
                                                                    <label class="seg_label_txt segment_lebel_txt" for="seg_check62">Academic Enrichment</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check70" value="70" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check70">Application / Enterprise Platform</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check69" value="69" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check69">Basic Computer / Office</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check28" value="28" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check28">Business Training</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check27" value="27" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check27">CA CPT</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check72" value="72" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check72">Certification</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check5" value="5" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check5">Class 1 - 5</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check7" value="7" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check7">Class 11 - 12</label></li></ul>			</ul>
                                                            <ul>
                                                                <ul><li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check64" value="64" /><
                                                                    label class="seg_label_txt segment_lebel_txt" for="seg_check64">Class 6 - 8</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check6" value="6" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check6">Class 9 - 10</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check9" value="9" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check9">College Level</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check65" value="65" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check65">Competitive Exams</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check36" value="36" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check36">Dance</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check71" value="71" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check71">Data Science / DBMS</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check11" value="11" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check11">Engineering Entrance &amp; IITJEE</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check13" value="13" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check13">Engineering Subjects</label></li></ul>			</ul>
                                                            <ul>
                                                                <ul><li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check12" value="12" />
                                                                    <label class="seg_label_txt segment_lebel_txt" for="seg_check12">English Speaking</label></li><li>
                                                                        <input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check66" value="66" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check66">Graphics &amp; Multimedia</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check63" value="63" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check63">Health &amp; Fitness</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check33" value="33" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check33">Hobby Classes</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check22" value="22" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check22">Languages</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check26" value="26" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check26">Law Subjects</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check24" value="24" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check24">MBA &amp; BBA</label></li>
                                                                    <li><input type="checkbox" class="seg_check_input segchoose" name="memberseg[]" id="seg_check37" value="37" />
                                                                        <label class="seg_label_txt segment_lebel_txt" for="seg_check37">Medical Entrance &amp; AIPMT</label></li></ul>			</ul>
                                                        </div>
                                                    </div>


                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card areadetails">
                                                    <h6 class="fs-title">Select City and Area</h6>

                                                    <div class="control-group">

                                                        <select class="list-dt" id="month" name="expmonth">
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

                                                        <label for="auto_area_list">Enter Area</label>

                                                        <input type="text" name="area" placeholder="Enter area" id="auto_area_list" value="" class="ui-autocomplete-input"
                                                            autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />

                                                        <div class="infotext">Mention prefered teaching locations <font id="curarea">(Ex: Kalkaji)</font></div>

                                                    </div>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card preferance">
                                                    <h6 class="fs-title">Where would you like to have your tuition?</h6>

                                                    <div class="utf-sidebar-widget-item">

                                                        <div class="utf-radio-btn-list">
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="chekcbox1" checked="" />
                                                                <label for="chekcbox1"><span class="checkbox-icon"></span> At Tutor's Place</label>
                                                            </div>
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="chekcbox2" />
                                                                <label for="chekcbox2"><span class="checkbox-icon"></span> At My Place</label>
                                                            </div>
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="chekcbox3" />
                                                                <label for="chekcbox3"><span class="checkbox-icon"></span>Institute or Coaching Center</label>
                                                            </div>
                                                            <div class="checkbox">
                                                                <input type="checkbox" id="chekcbox4" />
                                                                <label for="chekcbox4"><span class="checkbox-icon"></span> Online</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>


                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Tell us Learning Requirement (Optional)</h6>
                                                    <p>&nbsp;</p>
                                                    <textarea placeholder="Type your full address" id="address" name="address" value=""></textarea>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Basic details</h6>
                                                    <p>&nbsp;</p>
                                                    <input type="text" name="full-name" placeholder="Your full name" />

                                                    <input type="text" name="dateofbirth" placeholder="Your date of birth" />

                                                    <input type="text" name="address" placeholder="Communication address" />
                                                    <input type="text" name="pincode" placeholder="your area pincode" />
                                                    <input type="text" name="phonenumber" placeholder="Your phone number" />

                                                    <h2 class="fs-title">Payment Information</h2>
                                                    <div class="radio-group">
                                                        <div class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" />

                                                        </div>
                                                        <div class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" />
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
                                                <input type="button" name="make_payment" class="next action-button" value="Confirm" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card">
                                                    <h2 class="fs-title text-center">Success !</h2>
                                                    <div class="row justify-content-center">
                                                        <div class="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" /> </div>
                                                    </div>
                                                    <div class="row justify-content-center">
                                                        <div class="col-7 text-center">
                                                            <h5>Your requirement has been posted successfully</h5>
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
export default PostRequirement;