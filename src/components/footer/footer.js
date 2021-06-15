import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


class Footer extends React.Component {

   render() {
      return (
         <div className="row">
            <div class="container-fluid">

               <div id="footer">

                  <div class="container ">
                     <div className="row">
                        <div class="col-lg-3 col-md-3 col-sm-5 mt-3 text-left ">
                           <h4>About</h4>
                           <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                           <button type="button" class="btn btn-primary">Get Started</button>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-5 mt-3 text-left s">
                           <h4>Company</h4>
                           <ul class="footer-links">
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Careers</a></li>
                              <li><a href="#">Our Blog</a></li>
                              <li><a href="#">Terms of Service</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Hiring Hub</a></li>
                           </ul>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-5 mt-3 text-left ">
                           <h4>Press</h4>
                           <ul class="footer-links">
                              <li><a href="#">In the News</a></li>
                              <li><a href="#">Press Releases</a></li>
                              <li><a href="#">Awards</a></li>
                              <li><a href="#">Testimonials</a></li>
                              <li><a href="#">Timeline</a></li>
                           </ul>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-5 mt-3 text-left ">
                           <h4>Browse</h4>
                           <ul class="footer-links">
                              <li><a href="#">Freelancers by Category</a></li>
                              <li><a href="#">Freelancers in USA</a></li>
                              <li><a href="#">Freelancers in UK</a></li>
                              <li><a href="#">Freelancers in Canada</a></li>
                              <li><a href="#">Freelancers in Australia</a></li>
                              <li><a href="#">Find Jobs</a></li>

                           </ul>
                        </div>
                     </div>
                  </div>


                  <div class="container">
                     <div class="footer-bottom">
                        <div class="sixteen columns">
                           <h4 className='ml-4'>Follow Us</h4>
                           <ul class="social-icons">
                              <li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
                              <li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>

                              <li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
                           </ul>
                           <div class="copyrights col-lg-12 pb-4">©  Copyright 2021 by <a href="#">Knowlarity.com</a>. All Rights Reserved.</div>
                        </div>
                     </div>
                  </div>

               </div>


            </div>
         </div>
      )
   }
}

export default Footer;