import React from "react";

function Employer() {
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
                Project Information <i className="fa fa-pen"></i>
              </h4>
              <div className="form-row">
                <textarea className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
              <h4>Select Skills <i className="fa fa-pen"></i></h4>
              <select class="form-select" size="5" aria-label="size 6 select example">
              <option selected>HTML</option>
              <option value="1">CSS</option>
              <option value="2">JavaScript</option>
              <option value="3">Python</option>
              <option value="3">React</option>
              <option value="3">Angular</option>
            </select>
              </div>
              <div className="col-md-6 mb-3">
              <h4>Select Employment <i className="fa fa-pen"></i></h4>
              <select class="form-select" size="4" aria-label="size 6 select example">
              <option selected>Full time</option>
              <option value="1">Part time</option>
              <option value="2">Freelance</option>
              <option value="3">Contract based</option>
              
            </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employer;
