import React from 'react';
import ReactDOM from 'react-dom';

class Jobs extends React.Component {
   state = {
      jobs: []
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
      return <div className="container jobPageWidth">
         <div className="row">


            <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12 utf-sidebar-container-aera">

               <div className="utf-sidebar-widget-item">
                  <div className="utf-quote-box utf-jobs-listing-utf-quote-box">
                     <div className="utf-quote-info" style={{marginTop:'55px'}}>
                        <h4>Make a Difference with Online Resume!</h4>
                       {/*  <p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p> */}
                       <div style={{marginTop:'75px',borderRadius:'10px',border:'2px solid'}}>
                        <a href="register.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0"
                       style={{fontSize:'14px',color:'white',borderColor:'white',}} >Create Account <i className="icon-feather-chevrons-right"></i></a>
                       </div>
                     </div>
                  </div>
               </div>

               <div className="utf-sidebar-widget-item" style={{fontSize:'14px'}}>
                  <h3>Search Keywords</h3>
                  <div className="utf-input-with-icon">
                     <input type="text" placeholder="Search Keywords..." />
                     <i className="icon-material-outline-search"></i>
                  </div>
               </div>


               <div className="utf-sidebar-widget-item" style={{fontSize:'18px'}}>
                  <h3>Category</h3>
                  <div className="btn-group bootstrap-select">
                     <select className="list-dt" id="month" name="expmonth" multiple>
                        <span className="text">Web Design</span>

                        <option>Web Design</option>
                        <option>Accountant</option>
                        <option>Data Analytics</option>
                        <option>Marketing</option>
                        <option>Software Developing</option>
                        <option>IT &amp; Networking</option>
                        <option>Translation</option>
                        <option>Sales &amp; Marketing</option>
                        <option>Marketing</option>
                        <option>Software Developing</option>
                        <option>IT &amp; Networking</option>
                        <option>Translation</option>
                        <option>Sales &amp; Marketing</option>
                     </select>
                  </div>
               </div>

               <div className="utf-sidebar-widget-item" style={{fontSize:'18px'}}>
                  <h3>Job Type</h3>
                  <div className="utf-radio-btn-list">
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox1" checked="" style={{marginLeft:'1px'}} />
                        <label for="chekcbox1"><span className="checkbox-icon"></span> Full Time Jobs</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox2" style={{marginLeft:'1px'}} />
                        <label for="chekcbox2"><span className="checkbox-icon"></span> Part Time Jobs</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox3" style={{marginLeft:'1px'}}/>
                        <label for="chekcbox3"><span className="checkbox-icon"></span> Freelancer Jobs</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox4" style={{marginLeft:'1px'}} />
                        <label for="chekcbox4"><span className="checkbox-icon"></span> Internship Jobs</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox5" style={{marginLeft:'1px'}} />
                        <label for="chekcbox5"><span className="checkbox-icon"></span> Temporary Jobs</label>
                     </div>
                  </div>
               </div>

               <div className="utf-sidebar-widget-item" style={{fontSize:'18px'}}>
                  <h3>Experince</h3>
                  <div className="utf-radio-btn-list">
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox01" checked="" style={{marginLeft:'1px'}} />
                        <label for="chekcbox01"><span className="checkbox-icon"></span> 1Year to 2Year</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox02" style={{marginLeft:'1px'}} />
                        <label for="chekcbox02"><span className="checkbox-icon"></span> 2Year to 3Year</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox03" style={{marginLeft:'1px'}} />
                        <label for="chekcbox03"><span className="checkbox-icon"></span> 3Year to 4Year</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox04" style={{marginLeft:'1px'}} />
                        <label for="chekcbox04"><span className="checkbox-icon"></span> 4Year to 5Year</label>
                     </div>
                  </div>
               </div>

               <div className="utf-sidebar-widget-item" style={{fontSize:'18px'}}>
                  <h3>Career Level</h3>
                  <div className="utf-radio-btn-list">
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox001" checked="" style={{marginLeft:'1px'}}/>
                        <label for="chekcbox001"><span className="checkbox-icon"></span> Intermediate</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox002" style={{marginLeft:'1px'}}/>
                        <label for="chekcbox002"><span className="checkbox-icon"></span> Normal</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox003" style={{marginLeft:'1px'}} />
                        <label for="chekcbox003"><span className="checkbox-icon"></span> Special</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox004" style={{marginLeft:'1px'}} />
                        <label for="chekcbox004"><span className="checkbox-icon"></span> Experienced</label>
                     </div>
                  </div>
               </div>

               <div className="utf-sidebar-widget-item" style={{fontSize:'18px'}}>
                  <h3>Skills</h3>
                  <div className="utf-tags-container-item">
                  <div className="checkbox">
                        <input type="checkbox" id="chekcbox004" style={{marginLeft:'1px'}} />
                        <label for="chekcbox004"><span className="checkbox-icon"></span> HTML</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox004" style={{marginLeft:'1px'}} />
                        <label for="chekcbox004"><span className="checkbox-icon"></span> JavaScripts</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox004" style={{marginLeft:'1px'}} />
                        <label for="chekcbox004"><span className="checkbox-icon"></span> Web Design</label>
                     </div>
                     <div className="checkbox">
                        <input type="checkbox" id="chekcbox004" style={{marginLeft:'1px'}} />
                        <label for="chekcbox004"><span className="checkbox-icon"></span> Graphics Design</label>
                     </div>
                  </div>
                  <div className="clearfix"></div>
               </div>


            </div>
            <div className=" col-lg-9 col-md-9 col-sm-12 col-xs-12 compact-list-layout">

               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>


               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>


               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>


               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>

               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>


               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>

               <a href="single-job-page.html" className="utf-job-listing" style={{marginBottom:'30px'}}>
                  <div className="utf-job-listing-details">
                     <div className="utf-job-listing-company-logo">
                     <img src="./img_1.jpg" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                     </div>
                     <div className="utf-job-listing-description">
                        <span className="dashboard-status-button utf-job-status-item " style={{color:'orange',fontSize:'18px',marginLeft:"-10px"}}><i className="icon-material-outline-business-center"></i> Full Time</span><br />
                        <span className="bookmark-icon" style={{fontSize:'14px',color:'darkblue'}}>
                        INR 12500 to INR 25000/-
                            </span>
                     </div>
                     
                            <div className="utf-job-listing-footer lastjobfooter">
                            <h3 className="utf-job-listing-title" style={{color:'darkblue'}}>Web Designer, Graphic Designer, UI/UX Designer &amp; Art <span className="utf-verified-badge" data-tippy-placement="top" data-tippy="" data-original-title="Verified Employer"></span></h3>
                     </div>
                     <div className="utf-job-listing-footer">
                           <ul>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-feather-briefcase"></i> Software Developer</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
                              <li style={{fontSize:'16px',padding:'5px'}}><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
                           </ul>
                        </div>
                     <div className="utf-job-listing-footer lastjobfooter">
                        <ul>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-feather-briefcase"></i> Fixed price</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-account-balance-wallet"></i>10 Bid</li>
                           <li style={{fontSize:'16px',padding:'5px',color:'white',background:'gray'}}><i className="icon-material-outline-access-time"></i> 6 hours 25 mints left to bid</li>
                        </ul>
                     </div>
                    
                  </div>
               </a>
            </div>

         </div>

      </div >;
   }
}

export default Jobs;