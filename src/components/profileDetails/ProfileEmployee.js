import React from 'react';
import ReactDOM from 'react-dom';
import DualListBox from 'react-dual-listbox';

class ProfilEmployee extends React.Component {
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

  
   componentDidMount() {
      fetch("https://talenthunt-server.herokuapp.com/jobs/", { method: "GET" })
         .then(results => results.json())
         .then(data => {
            this.setState({ jobs: data })
         })
         .catch((err) => {
            console.log(err);
         })


   }


   render() {
      const { selected } = this.state;

      const  options = [
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
   
      return <div className="container jobPageWidth">
         <div className="row">


            <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12 utf-sidebar-container-aera">

               {/*  <div className="utf-sidebar-widget-item">
                  <div className="utf-quote-box utf-jobs-listing-utf-quote-box">
                     <div className="utf-quote-info" style={{marginTop:'55px'}}>
                        <h4>Make a Difference with Online Resume!</h4>
                        <p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                       <div style={{marginTop:'75px',borderRadius:'10px',border:'2px solid'}}>
                        <a href="register.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
                       style={{fontSize:'14px',color:'white',borderColor:'white',}} >Create Account <i className="icon-feather-chevrons-right"></i></a>
                       </div>
                     </div>
                  </div>
               </div> */}

               <div className="utf-sidebar-widget-item" style={{ fontSize: '14px', paddingBottom: '130px' }} style={{background:'#efefef'}} >
                  <div className='utf-job-listing-details'>
                     <div className="utf-job-listing-company-logo" style={{ textAlign: 'center' }}>
                        <img src="./img_1.jpg" alt="Girl in a jacket" className="avatar" style={{ width: '100px', height: '100px', borderRadius: "50%", verticalAlign: 'center' }} />
                        <p>Employee</p>
                        <h3>John_2021</h3>
                     </div>
                     <div className="utf-input-with-icon">
                        <p>john Roy</p>
                        <p>+916587425632</p>
                        <p>john1234@gmail.com</p>
                     </div>
                     <button style={{ background: 'darkblue', width: '100%', borderRadius: '10px', border: 'none', padding: '10px', color: 'white' }}>Edit Your Profile</button>
                  </div>
               </div>


            </div>
            <div className=" col-lg-9 col-md-9 col-sm-12 col-xs-12 compact-list-layout">

               <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>Personal Details</h3>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-6' >
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Full Name</label>
                           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />

                        </div>
                        <div className='col-6' style={{ paddingTop: '20px' }}>
                           <div class="form-check-inline">
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Option 3
                              </label>
                           </div>
                           <div class="form-check-inline" >
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Option 3
                              </label>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className='container'>
                     <div className='row'>
                        <div className='col-6' >
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Date Of Birth</label>
                           <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />

                        </div>
                        <div className='col-6'>
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Phone Number</label>
                           <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />
                        </div>
                     </div>
                  </div>

                  <div className='container'>
                     <div className='row'>
                        <div className='col-6' >
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Email Id</label>
                           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />

                        </div>
                        <div className='col-6' >
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Whatsapp Number</label>
                           <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />
                        </div>
                     </div>
                  </div>

                  <div className='container'>
                     <div className='row'>
                        <div className='col-6' >
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>City</label>
                           <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />

                        </div>
                        <div className='col-6'>
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Area</label>
                           <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />
                        </div>
                     </div>
                  </div>

                  <div className='container'>
                     <div className='row'>
                        <div className='col-6'>
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Pin Code</label>
                           <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />

                        </div>
                        <div className='col-6'>
                           <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>Full Address</label>
                           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ fontSize: '14px', fontWeight: '100' }} />
                        </div>
                     </div>
                  </div>
               </a>


               <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>Membership</h3>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-3'>
                           <div class="form-check-inline" >
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Free Membership
                              </label>
                           </div>
                        </div>
                        <div className='col-3'>
                           <div class="form-check-inline" >
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Sliver Membership
                              </label>
                           </div>
                        </div>
                        <div className='col-3'>
                           <div class="form-check-inline" >
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Gold Membership
                              </label>
                           </div>
                        </div>
                        <div className='col-3'>
                           <div class="form-check-inline" >
                              <label class="form-check-label" style={{ fontSize: '14px', fontWeight: '100' }}>
                                 <input type="radio" class="form-check-input" />Pletinum Membership
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>


            </div>
            <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 utf-sidebar-container-aera'>

            </div>

            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 compact-list-layout'>
               <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>Select Education</h3>
                  <input type="radio" id="male" name="gender" value="male" />
                     <label for="male" style={{ fontSize: '14px', fontWeight: '100' }}>Intermediate</label><br />
                        <input type="radio" id="female" name="gender" value="female"/>
                           <label for="female" style={{ fontSize: '14px', fontWeight: '100' }}>Graduate</label><br />
                              <input type="radio" id="other" name="gender" value="other" />
                                 <label for="other" style={{ fontSize: '14px', fontWeight: '100' }}>PostGraduate</label>
                  </a>
                  <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>SKill</h3>
                
                                                <div class="form-card">
                                                    
                                                    <p>&nbsp;</p>
                                                    <p></p>

                                                    <DualListBox
                                                        options={options}
                                                        selected={selected}
                                                        onChange={this.onChange}
                                                    />

                                                </div>
                                               
                                            
                  
                  </a>
            </div>
                           <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 compact-list-layout'>
                           <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>Select City And Area</h3>
                  <label for="exampleInputEmail1" style={{ fontSize: '14px', fontWeight: '100' }}>City</label>
                           <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Membai" style={{ fontSize: '14px', fontWeight: '100' }} />
                  </a>

                  <a className="utf-job-listing" style={{ marginBottom: '30px',background:'#efefef' }}>
                  <h3>Experince</h3>
                  <div className="btn-group bootstrap-select" style={{width:"100%",fontSize:'14px'}}>
                     <select className="list-dt" id="month" name="expmonth" style={{width:'100%'}} multiple>
                        <span className="text">Web Design</span>

                        <option>Freshers</option>
                        <option>0-1 Year</option>
                        <option>1-2 Year</option>
                        <option>2-3 Year</option>
                        <option>3-4 Year</option>
                        <option>4-5 Year</option>
                        <option>4-5 Yea</option>
                        <option>4-5 Yeag</option>
                       
                     </select>
                  </div>

                  <h3>Employee</h3>
                  <div className="btn-group bootstrap-select" style={{width:"100%",fontSize:'14px'}}>
                     <select className="list-dt" id="month" name="expmonth" style={{width:'100%'}} multiple>
                        <span className="text">Web Design</span>

                        <option>Full Time</option>
                        <option>Intership</option>
                        <option>part-Time</option>
                        <option>Contract based</option>
                        <option>Freelancer</option>
                       
                       
                     </select>
                  </div>
                  </a>
                           </div>

         </div>

      </div >;
   }
}

                     export default ProfilEmployee;