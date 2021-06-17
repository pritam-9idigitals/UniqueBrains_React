import React from "react";

function Teacher() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mt-5" style={{ backgroundColor: "#efefef" }}>
          <div>
            <img
              className="img-fluid"
              style={{
                borderRadius: "50%",
                height: "100px",
                textAlign: "center",
              }}
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
            />
            <h6>Teacher</h6>
            <h6>Yash_2021</h6>
          </div>
          <div>
            <p>Yash Pandya</p>
            <p>+91 9876556789</p>
            <p>yeshpanday@gmail.com</p>
            <button className="btn btn-primary">
              Edit Your Profile <i className="fa fa-pen"></i>
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div style={{ backgroundColor: "#efefef" }}>
            <div className="m-5">
              <h4 >Personal Details</h4>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="validationDefault01">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="Yash Gupta"
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
                    placeholder="+91 9876556789"
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
                    placeholder="+91 9876556789"
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
                  <label for="validationDefault04">
                    Enter your full address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="Mumbai"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div style={{ backgroundColor: "#efefef" }}>
            <div className=" m-5">
            <h4>
            Class Type <i className="fa fa-pen"></i>
          </h4>
          <div className="form-row">
          <div className="col-md-12 mb-3">
            <input type="radio" name="gender" value="male" /> Face to face
            tutoring
            <input type="radio" name="gender" value="female" /> Online
            tutoring
            <input type="radio" name="gender" value="female" /> Both Face
            to face tutoring & Online tutoring
          </div>
          </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#efefef" }}>
            <div className="form-row m-5">
              <div className="col-md-6 mb-3 mt-5">
                <h4>
                  Segment <i className="fa fa-pen"></i>
                </h4>
                <div className="form-check">
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Class 1-5
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Class 6-8
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Class 1-10
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Class 11-12
                  </label>
                </div>
              </div>
              <div className="col-md-6 mb-3 mt-5">
                <h4>
                  Fees <i className="fa fa-pen"></i>
                </h4>
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
  );
}

export default Teacher;
