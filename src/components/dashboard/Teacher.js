import React from 'react'

function Teacher() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
            <img className="img-fluid" style={{borderRadius:"50%",height:"100px",textAlign:"center"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"/>
              <h6>Employer</h6>
              <h6>Pravin_2021</h6>
            </div>
            <div>
              <p>Pravin Kumar</p>
              <p>+91 7876556789</p>
              <p>pravinkumar@gmail.com</p>
              <button className="btn btn-primary">
                Edit Your Profile <i className="fa fa-pen"></i>
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="mt-2">
              <h4>Personal Details</h4>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault01">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Pravin Kumar"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <input type="radio" name="gender" value="male" /> Male
                  <input type="radio" name="gender" value="female" /> Female
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="DD/MM/YY"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault04">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="+91 7876556789"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">Email Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="kajalmisra@gmail.com"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault04">Whatsapp Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="+91 7876556789"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="Mumbai"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault04">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="Mumbai"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault03">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="756421"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationDefault04">Enter your full address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="Mumbai"
                    required
                  />
                </div>
              </div>
              <div className="bg">
                <h4>
                  Class Type <i className="fa fa-pen"></i>
                </h4>
                <div className="form-row">
                <input type="radio" name="gender" value="male" /> Face to face tutoring
                <input type="radio" name="gender" value="female" /> Online tutoring
                <input type="radio" name="gender" value="female" /> Both Face to face tutoring & Online tutoring
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                <h4>Segment <i className="fa fa-pen"></i></h4>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Class 1-5
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    Class 6-8
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Class 1-10
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Class 11-12
  </label>
</div>
                </div>
                <div className="col-md-6 mb-3">
                <h4>Fees <i className="fa fa-pen"></i></h4>
                <label for="validationDefault04">Rate/Hour</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault04"
                  placeholder="INR 800"
                  required
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Teacher
