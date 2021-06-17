import React from "react";

function Employer() {
  return (
    <div className="container">
      <div className="row shadow rounded">
        <div className="col-md-3 mt-5" style={{ backgroundColor: "#efefef",textAlign:"center", height:"400px"}}>
          <div className="mt-5">
            <img
              className="img-fluid"
              style={{
                borderRadius: "50%",
                height: "100px",
                textAlign: "center",
              }}
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
            />
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
          <div style={{ backgroundColor: "#efefef" }}>
            <div className="m-5">
              <h4>Personal Details</h4>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label >Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                   
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
                  <label >Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                  
                    placeholder="DD/MM/YY"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                   
                    placeholder="+91 7876556789"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label >Email Id</label>
                  <input
                    type="text"
                    className="form-control"
                   
                    placeholder="kajalmisra@gmail.com"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Whatsapp Number</label>
                  <input
                    type="text"
                    className="form-control"placeholder="+91 7876556789"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label >City</label>
                  <input
                    type="text"
                    className="form-control" placeholder="Mumbai"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Area</label>
                  <input
                    type="text"
                    className="form-control"placeholder="Mumbai"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label>Pin Code</label>
                  <input
                    type="text"
                    className="form-control" placeholder="756421"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>
                    Enter your full address
                  </label>
                  <input
                    type="text"
                    className="form-control" placeholder="Mumbai"
                    required
                  />
                </div>
              </div>
            </div>
            </div>
            <div style={{ backgroundColor: "#efefef",height:"80px" }}>
            <div className="m-5">
            <h4>
              Project Information <i className="fa fa-pen"></i>
            </h4>
            <div className="form-row">
              <textarea className="form-control fw-bold" placeholder="Tell us more about the project" required/>
            </div>
          </div>
            </div>
 <div style={{ backgroundColor: "#efefef" }}>
            <div className="form-row m-5" >
            <div className="col-md-6 mb-3">
              <h4>
                Select Skills <i className="fa fa-pen"></i>
              </h4>
              <select
                class="form-select"
                size="5"
                aria-label="size 6 select example"
                style={{width:"100%"}}
              >
                <option selected style={{fontSize:"16px"}}>HTML</option>
                <option value="1" style={{fontSize:"16px"}}>CSS</option>
                <option value="2" style={{fontSize:"16px"}}>JavaScript</option>
                <option value="3" style={{fontSize:"16px"}}>Python</option>
                <option value="4" style={{fontSize:"16px"}}>React</option>
                <option value="5" style={{fontSize:"16px"}}>Angular</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <h4>
                Select Employment <i className="fa fa-pen"></i>
              </h4>
              <select
                class="form-select"
                size="4"
                aria-label="size 6 select example"
                style={{width:"100%"}}
              >
                <option selected style={{fontSize:"16px"}}>Full time</option>
                <option value="1" style={{fontSize:"16px"}}>Part time</option>
                <option value="2" style={{fontSize:"16px"}}>Freelance</option>
                <option value="3" style={{fontSize:"16px"}}>Contract based</option>
              </select>
            </div>
          </div>
            </div> </div>
      </div>
    </div>
  );
}

export default Employer;
