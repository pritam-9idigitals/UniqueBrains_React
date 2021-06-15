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

class Empskills extends Component {
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
                                        <h4>Let us know more about your self</h4>

                                        <p>Fill all form field to go to next step</p>

                                        <form id="msform">
                                            <ul id="progressbar" className="progressbaremployee">
                                                <li class="active" id="account"><strong>Skills</strong></li>
                                                <li id="personal"><strong>Education</strong></li>
                                                <li id="personal"><strong>Experience</strong></li>
                                                <li id="payment"><strong>Choose Membership</strong></li>
                                                <li id="confirm"><strong>Finish</strong></li>
                                            </ul>
                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Skills Information</h6>
                                                    <p>&nbsp;</p>
                                                    <p></p>

                                                    <DualListBox
                                                        options={options}
                                                        selected={selected}
                                                        onChange={this.onChange}
                                                    />

                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Select Educaton</h6>
                                                    <p>&nbsp;</p>
                                                    <div class="control-group">

                                                        <label class="control control--checkbox">Intermediate
                                                             <input type="checkbox" />
                                                            <div class="control__indicator"></div>
                                                        </label>
                                                        <label class="control control--checkbox">Graduate
                                                             <input type="checkbox" />
                                                            <div class="control__indicator"></div>
                                                        </label>
                                                        <label class="control control--checkbox">Post Graduate
                                                             <input type="checkbox" />
                                                            <div class="control__indicator"></div>
                                                        </label>

                                                    </div>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>

                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Select Experience</h6>
                                                    <p>&nbsp;</p>
                                                    <select class="custom-select" multiple>
                                                        <option selected>Fresher</option>
                                                        <option value="1">1 to 3 Years</option>
                                                        <option value="2">3 to 5 Years</option>
                                                        <option value="3">5 Years + </option>
                                                    </select>
                                                    <h6 class="fs-title">Select Employement type</h6>

                                                    <select class="custom-select" multiple>
                                                        <option selected>Full time</option>
                                                        <option value="1">Part time</option>
                                                        <option value="2">Freelance</option>
                                                        <option value="3">Contract based</option>
                                                    </select>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                                <input type="button" name="next" class="next action-button" value="Next Step" />
                                            </fieldset>


                                            <fieldset>
                                                <div class="form-card">
                                                    <h6 class="fs-title">Choose Membership</h6>
                                                    <p>&nbsp;</p>

                                                    <div class="empboxes">
                                                        <div class="col-xs-4 dhbgtp">
                                                            <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                            <button type="button" class="btn btn-primary btn-radio">Free Membership</button>
                                                            <input type="checkbox" id="left-item" class="hidden" />
                                                        </div>
                                                        <div class="col-xs-4 dhbgtp">
                                                            <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                            <button type="button" class="btn btn-primary btn-radio">Silver Membership</button>
                                                            <input type="checkbox" id="middle-item" class="hidden" />
                                                        </div>
                                                        <div class="col-xs-4 dhbgtp">
                                                            <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                            <button type="button" class="btn btn-primary btn-radio">Gold Membership</button>
                                                            <input type="checkbox" id="middle-item" class="hidden" />
                                                        </div>
                                                        <div class="col-xs-4 dhbgtp">
                                                            <img src="http://placehold.it/160x100" class="img-responsive img-radio" />
                                                            <button type="button" class="btn btn-primary btn-radio">Pletinum </button>
                                                            <input type="checkbox" id="middle-item" class="hidden" />
                                                        </div>
                                                    </div>
                                                    <div class="complans">
                                                        <a href="/membership" class="fill_btn ">Compare the Plans</a>
                                                    </div>
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
                                                            <h5>Your profile has been created</h5>
                                                            <p>&nbsp;</p>
                                                            <div class="complans">
                                                                <a href="/jobs" class="fill_btn">Browse Jobs</a>
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
export default Empskills;