import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';

class Courses extends React.Component {
   state = {
      coures: []
   }
   componentDidMount() {
      fetch("https://talenthunt-server.herokuapp.com/course/", { method: "GET" })
         .then(results => results.json())
         .then(data => {
            console.log(data)
            this.setState({ course: data })
         })
         .catch((err) => {
            console.log(err);
         })
   }

   render() {
      return (
         <div className="container">
            <div className="row">

               {/* <div className="breadcrumb_holder">
                  <a href="/">Home</a><span>»</span><a href="/local-tutors">Local Tutors</a><span>»</span><a href="/local-tutors/delhi">Local Tutors in Delhi
                  </a><span>»</span><a href="/local-tutors/delhi/all/mathematics">Local Mathematics Tutors in  Delhi</a><span>»
                  </span> 31638+ Listings
               </div>
 */}
 <div className='container'>
    <div className='row'>
       <div className='col-6'>
       <div className="listing_intro_box">
                  <h2 style={{color:'darkblue'}}>Maths Teachers Near You</h2>
                  <p>Looking for Maths tutors in Delhi? We have a large number of instructors and trainers who can help you taking classNamees and lessons for Maths. Both one to one and group className options are available near your place or online. View the profiles of the teachers and trainers detailing their qualification, expertise, teaching techniques, hourly rates and availability.</p> <p>Post your requirement for free to find the best Maths tutors in Delhi.</p>
               </div>
       </div>
       <div className='col-6' /* style={{textAlign:'center'}} */>
       <img src="./banner.png" alt="Girl in a jacket" className="form-logo img-fluid" width="400px" height="250" />
       </div>
    </div>
 </div>
               









               <div className="listing_main_block row">
                  <div className="sidebarg col-lg-4 col-md-4">
                     <h3>Find a Local Tutor Near You</h3>


                     <div class="block_section">
                        <h3 class="right_category_head">
                           <a href="#" class="filterdown">Locations</a></h3>
                        <div class="down_block right_category_content">
                           <ul class="link_list">
                              <li id="subscroll_locations_4999"><a href="#">Pune</a></li>
                              <li id="subscroll_locations_5000"><a href="#">Mumbai</a></li>
                              <li id="subscroll_locations_5001"><a href="#">Hydrabad</a></li>
                              <li id="subscroll_locations_5004"><a href="#">Bangalore</a></li>
                              <li id="subscroll_locations_5002"><a href="#">Chennai</a></li>
                           </ul>
                        </div>
                     </div>


                     <div class="block_section">
                        <h3 class="right_category_head">
                           <a href="#" class="filterarrow">Class 1 - 5</a></h3>

                     </div>

                     <div class="block_section">
                        <h3 class="right_category_head">
                           <a href="#" class="filterarrow">Class 6 - 8</a></h3>

                     </div>

                     <div class="block_section">
                        <h3 class="right_category_head">
                           <a href="#" class="filterarrow">Class 9 - 10</a></h3>

                     </div>

                     <div class="block_section">
                        <h3 class="right_category_head">
                           <a href="#" class="filterarrow">Class 11 - 12</a></h3>

                     </div>


                     <div class="block_element" >
                        <div class="blue_box_block" style={{background:'darkblue'}}>
                           <h2>Do you provide Maths Tuition?</h2>
                           <a href="/tutor-landing" target="_blank" class="outline_btn">Create Free Profile</a>
                        </div>
                     </div>


                     <div class="block_element mb-5">
                        <div class="main_notes_block">
                           <h2 style={{color:'black'}}>Sine and cosine rule</h2>
                           <ul class="item_blocks">
                              <li>
                                 <div class="photoholder">
                                 <img src="./img.png" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                                 </div>
                                 <div class="element_block">
                                    <h3><a href="/prime/documents/ppts/details/431/sine-and-cosine-rule" target="_blank" style={{color:'black'}}>Sine and cosine rule</a></h3>
                                    <div class="categorys">Science, Physics, Mathematics, Computer, Computer ...</div>
                                    <div class="author" ><h4 style={{color:'black',fontSize:'14px'}}>By: Debarun S ()</h4></div>
                                    <div class="count"style={{color:'darkblue',fontSize:'14px'}}>1,854 views</div>
                                 </div>
                              </li>
                              <li>

                                 <div class="element_block" >
                                    <h3 ><a href="#" target="_blank" style={{color:'black',fontSize:'14px'}}>Algebraic expression</a></h3>
                                   
                                 </div>
                              </li>
                           </ul>
                           <div style={{paddingTop:'30px',fontSize:'12px'}}  >
                           <a href="/prime/documents/ppts/mathematics" style={{color:'gray'}} class="primary MarginClass" target="_blank">View all Maths PPT Slides</a>
                           </div>
                        </div>
                        <div class="main_notes_block">
                           {/* <h2 style={{color:'black'}}>Sine and cosine rule</h2> */}
                           <ul class="item_blocks">
                              <li>
                                 <div class="photoholder">
                                 <img src="./img.png" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                                 </div>
                                 <div class="element_block">
                                    <h3><a href="/prime/documents/ppts/details/431/sine-and-cosine-rule" target="_blank" style={{color:'black'}}>Sine and cosine rule</a></h3>
                                    <div class="categorys">Science, Physics, Mathematics, Computer, Computer ...</div>
                                    <div class="author" ><h4 style={{color:'black',fontSize:'14px'}}>By: Debarun S ()</h4></div>
                                    <div class="count"style={{color:'darkblue',fontSize:'14px'}}>1,854 views</div>
                                 </div>
                              </li>
                              <li>

                                 <div class="element_block" >
                                    <h3 ><a href="#" target="_blank" style={{color:'black',fontSize:'14px'}}>Algebraic expression</a></h3>
                                   
                                 </div>
                              </li>
                           </ul>
                           <div style={{paddingTop:'30px',fontSize:'12px'}}  >
                           <a href="/prime/documents/ppts/mathematics" style={{color:'gray'}} class="primary MarginClass" target="_blank">View all Maths PPT Slides</a>
                           </div>
                        </div>

                        <div class="main_notes_block">
                          {/*  <h2 style={{color:'black'}}>Sine and cosine rule</h2> */}
                           <ul class="item_blocks">
                              <li>
                                 <div class="photoholder">
                                 <img src="./img.png" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                                 </div>
                                 <div class="element_block">
                                    <h3><a href="/prime/documents/ppts/details/431/sine-and-cosine-rule" target="_blank" style={{color:'black'}}>Sine and cosine rule</a></h3>
                                    <div class="categorys">Science, Physics, Mathematics, Computer, Computer ...</div>
                                    <div class="author" ><h4 style={{color:'black',fontSize:'14px'}}>By: Debarun S ()</h4></div>
                                    <div class="count"style={{color:'darkblue',fontSize:'14px'}}>1,854 views</div>
                                 </div>
                              </li>
                              <li>

                                 <div class="element_block" >
                                    <h3 ><a href="#" target="_blank" style={{color:'black',fontSize:'14px'}}>Algebraic expression</a></h3>
                                   
                                 </div>
                              </li>
                           </ul>
                           <div style={{paddingTop:'30px',fontSize:'12px'}}  >
                           <a href="/prime/documents/ppts/mathematics" style={{color:'gray'}} class="primary MarginClass" target="_blank">View all Maths PPT Slides</a>
                           </div>
                        </div>
                        <div class="main_notes_block">
                           {/* <h2 style={{color:'black'}}>Sine and cosine rule</h2> */}
                           <ul class="item_blocks">
                              <li>
                                 <div class="photoholder">
                                 <img src="./img.png" alt="Girl in a jacket" className="form-logo img-fluid" width="100" height="60" />
                                 </div>
                                 <div class="element_block">
                                    <h3><a href="/prime/documents/ppts/details/431/sine-and-cosine-rule" target="_blank" style={{color:'black'}}>Sine and cosine rule</a></h3>
                                    <div class="categorys">Science, Physics, Mathematics, Computer, Computer ...</div>
                                    <div class="author" ><h4 style={{color:'black',fontSize:'14px'}}>By: Debarun S ()</h4></div>
                                    <div class="count"style={{color:'darkblue',fontSize:'14px'}}>1,854 views</div>
                                 </div>
                              </li>
                              <li>

                                 <div class="element_block" >
                                    <h3 ><a href="#" target="_blank" style={{color:'black',fontSize:'14px'}}>Algebraic expression</a></h3>
                                   
                                 </div>
                              </li>
                           </ul>
                           <div style={{paddingTop:'30px',fontSize:'12px'}}  >
                           <a href="/prime/documents/ppts/mathematics" style={{color:'gray'}} class="primary MarginClass" target="_blank">View all Maths PPT Slides</a>
                           </div>
                        </div>
                     </div>








                  </div>

                  <div className="listing_cards_holder col-lg-8 col-md-8 mb-5">

                     <div className="tutor_listing_block" id="listingblock_51898">
                        <div className="outer_block_top">
                           <div className="top_tut_block">
                              <div className="prosnap_left">
                                 <div className="photo_block">
                                    <div className="user_photoholder">
                                    <img src="./Layer-5.png" alt="Girl in a jacket" className="form-logo img-fluid" /* width="100" height="60"  *//>
                                    </div>
                                    <span className="verify" >Verified</span>
                                 </div>
                                 <div className="rightinfo">
                                    <h3><a href="/prodetails" target="_blank" style={{color:'darkblue'}}>Harsha Gupta</a></h3>
                                    <p>Male, 36 Years	<span className="protag" style={{background:'darkblue'}} >Pro</span></p>
                                    <div className="reviewitem">
                                       <ul>
                                          <li className="star">5.00</li>
                                          <li className="reviews">
                                             <a href="#" target="_blank" style={{color:'darkblue'}}>15 Reviews</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="contact_details_right">
                                 <ul className="listinfo">
                                    <li>
                                       <span>Qualification<small>:</small></span>
                                       <span>M.A</span>
                                    </li>
                                    <li>
                                       <span>Experience<small>:</small></span>
                                       <span>2 years</span>
                                       <div className="tooltip_block_display">
                                          <p>Vijay K have 2 years of teaching experience</p>
                                       </div>
                                    </li>
                                    <li>
                                       <span>Location<small>:</small></span>
                                       <div className="locright">
                                          <span>Anand Niketan</span>
                                          <span>  Anand Niketan</span>
                              <a >Chanakya Puri</a>,
                              <a >Connaught Place</a>,
                             
                                       </div>
                                    </li>
                                    <li>
                                       <span>Fees:<small>:</small></span>
                                       <div className="locright">
                                          <span>INR 900/hr</span>
                                       </div>
                                    </li>
                                    <li>
                                       <span>Distance:<small>:</small></span>
                                       <div className="locright">
                                          <span>8.8 KM</span>
                                       </div>
                                       <div className="tooltip_block_display">
                                          <p>Distance 8.8 km from Delhi </p>
                                       </div>
                                    </li>
                                 </ul>
                                 <div className="morelaytopinfo">
                                    <ul>
                                       <li>Home Tutor</li><small>:</small>
                                       <li>Activity Score - 750</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="topbottom_section">

                              <div className="teaches_block">
                                 <span>Teaches:</span>
                                 <div className="right_subject">
                                    <a href="#" className="active">Mathematics </a><a href="#">History</a>
                                    <a href="#">Hindi</a><a href="#">Vedic Maths</a>
                                 </div>
                                 <a href="#" className="viewfull viesubject downsubjectmore" style={{color:'darkblue'}}> + 15 More Subjects
						           </a>
                              </div>
                           </div>
                           <div style={{display:'flex',justifyContent:'space-around',fontSize:'14px'}}>
                           <a href="#" className="outline_btn" target="_blank">View More</a>
                                 <a href="#" className="fill_btn" target="_blank" style={{background:'darkblue'}}>REQUEST a CALLBACK</a> <a href="#" className="outline_btn" target="_blank">Send Message</a>
                                 
                           </div>

                          
                        </div>
                     </div>





                  </div>
                  <div className="listing_cards_holder col-lg-8 col-md-8 mb-5">

                     <div className="tutor_listing_block" id="listingblock_51898">
                        <div className="outer_block_top">
                           <div className="top_tut_block">
                              <div className="prosnap_left">
                                 <div className="photo_block">
                                    <div className="user_photoholder">
                                    <img src="./Layer-5.png" alt="Girl in a jacket" className="form-logo img-fluid" /* width="100" height="60"  *//>
                                    </div>
                                    <span className="verify" >Verified</span>
                                 </div>
                                 <div className="rightinfo">
                                    <h3><a href="/prodetails" target="_blank" style={{color:'darkblue'}}>Harsha Gupta</a></h3>
                                    <p>Male, 36 Years	<span className="protag" style={{background:'darkblue'}} >Pro</span></p>
                                    <div className="reviewitem">
                                       <ul>
                                          <li className="star">5.00</li>
                                          <li className="reviews">
                                             <a href="#" target="_blank" style={{color:'darkblue'}}>15 Reviews</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="contact_details_right">
                                 <ul className="listinfo">
                                    <li>
                                       <span>Qualification<small>:</small></span>
                                       <span>M.A</span>
                                    </li>
                                    <li>
                                       <span>Experience<small>:</small></span>
                                       <span>2 years</span>
                                       <div className="tooltip_block_display">
                                          <p>Vijay K have 2 years of teaching experience</p>
                                       </div>
                                    </li>
                                    <li>
                                       <span>Location<small>:</small></span>
                                       <div className="locright">
                                          <span>Anand Niketan</span>
                                          <span>  Anand Niketan</span>
                              <a >Chanakya Puri</a>,
                              <a >Connaught Place</a>,
                             
                                       </div>
                                    </li>
                                    <li>
                                       <span>Fees:<small>:</small></span>
                                       <div className="locright">
                                          <span>INR 900/hr</span>
                                       </div>
                                    </li>
                                    <li>
                                       <span>Distance:<small>:</small></span>
                                       <div className="locright">
                                          <span>8.8 KM</span>
                                       </div>
                                       <div className="tooltip_block_display">
                                          <p>Distance 8.8 km from Delhi </p>
                                       </div>
                                    </li>
                                 </ul>
                                 <div className="morelaytopinfo">
                                    <ul>
                                       <li>Home Tutor</li><small>:</small>
                                       <li>Activity Score - 750</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="topbottom_section">

                              <div className="teaches_block">
                                 <span>Teaches:</span>
                                 <div className="right_subject">
                                    <a href="#" className="active">Mathematics </a><a href="#">History</a>
                                    <a href="#">Hindi</a><a href="#">Vedic Maths</a>
                                 </div>
                                 <a href="#" className="viewfull viesubject downsubjectmore" style={{color:'darkblue'}}> + 15 More Subjects
						           </a>
                              </div>
                           </div>
                           <div style={{display:'flex',justifyContent:'space-around',fontSize:'14px'}}>
                           <a href="#" className="outline_btn" target="_blank">View More</a>
                                 <a href="#" className="fill_btn" target="_blank" style={{background:'darkblue'}}>REQUEST a CALLBACK</a> <a href="#" className="outline_btn" target="_blank">Send Message</a>
                                 
                           </div>

                          
                        </div>
                     </div>
                  </div>



                  <div className="listing_cards_holder col-lg-8 col-md-8 mb-5">

<div className="tutor_listing_block" id="listingblock_51898">
   <div className="outer_block_top">
      <div className="top_tut_block">
         <div className="prosnap_left">
            <div className="photo_block">
               <div className="user_photoholder">
               <img src="./Layer-5.png" alt="Girl in a jacket" className="form-logo img-fluid" /* width="100" height="60"  *//>
               </div>
               <span className="verify" >Verified</span>
            </div>
            <div className="rightinfo">
               <h3><a href="/prodetails" target="_blank" style={{color:'darkblue'}}>Harsha Gupta</a></h3>
               <p>Male, 36 Years	<span className="protag" style={{background:'darkblue'}} >Pro</span></p>
               <div className="reviewitem">
                  <ul>
                     <li className="star">5.00</li>
                     <li className="reviews">
                        <a href="#" target="_blank" style={{color:'darkblue'}}>15 Reviews</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="contact_details_right">
            <ul className="listinfo">
               <li>
                  <span>Qualification<small>:</small></span>
                  <span>M.A</span>
               </li>
               <li>
                  <span>Experience<small>:</small></span>
                  <span>2 years</span>
                  <div className="tooltip_block_display">
                     <p>Vijay K have 2 years of teaching experience</p>
                  </div>
               </li>
               <li>
                  <span>Location<small>:</small></span>
                  <div className="locright">
                     <span>Anand Niketan</span>
                     <span>  Anand Niketan</span>
         <a >Chanakya Puri</a>,
         <a >Connaught Place</a>,
        
                  </div>
               </li>
               <li>
                  <span>Fees:<small>:</small></span>
                  <div className="locright">
                     <span>INR 900/hr</span>
                  </div>
               </li>
               <li>
                  <span>Distance:<small>:</small></span>
                  <div className="locright">
                     <span>8.8 KM</span>
                  </div>
                  <div className="tooltip_block_display">
                     <p>Distance 8.8 km from Delhi </p>
                  </div>
               </li>
            </ul>
            <div className="morelaytopinfo">
               <ul>
                  <li>Home Tutor</li><small>:</small>
                  <li>Activity Score - 750</li>
               </ul>
            </div>
         </div>
      </div>
      <div className="topbottom_section">

         <div className="teaches_block">
            <span>Teaches:</span>
            <div className="right_subject">
               <a href="#" className="active">Mathematics </a><a href="#">History</a>
               <a href="#">Hindi</a><a href="#">Vedic Maths</a>
            </div>
            <a href="#" className="viewfull viesubject downsubjectmore" style={{color:'darkblue'}}> + 15 More Subjects
        </a>
         </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',fontSize:'14px'}}>
      <a href="#" className="outline_btn" target="_blank">View More</a>
            <a href="#" className="fill_btn" target="_blank" style={{background:'darkblue'}}>REQUEST a CALLBACK</a> <a href="#" className="outline_btn" target="_blank">Send Message</a>
            
      </div>

     
   </div>
</div>
</div>




<div className="listing_cards_holder col-lg-8 col-md-8 mb-5">

<div className="tutor_listing_block" id="listingblock_51898">
   <div className="outer_block_top">
      <div className="top_tut_block">
         <div className="prosnap_left">
            <div className="photo_block">
               <div className="user_photoholder">
               <img src="./Layer-5.png" alt="Girl in a jacket" className="form-logo img-fluid" /* width="100" height="60"  *//>
               </div>
               <span className="verify" >Verified</span>
            </div>
            <div className="rightinfo">
               <h3><a href="/prodetails" target="_blank" style={{color:'darkblue'}}>Harsha Gupta</a></h3>
               <p>Male, 36 Years	<span className="protag" style={{background:'darkblue'}} >Pro</span></p>
               <div className="reviewitem">
                  <ul>
                     <li className="star">5.00</li>
                     <li className="reviews">
                        <a href="#" target="_blank" style={{color:'darkblue'}}>15 Reviews</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="contact_details_right">
            <ul className="listinfo">
               <li>
                  <span>Qualification<small>:</small></span>
                  <span>M.A</span>
               </li>
               <li>
                  <span>Experience<small>:</small></span>
                  <span>2 years</span>
                  <div className="tooltip_block_display">
                     <p>Vijay K have 2 years of teaching experience</p>
                  </div>
               </li>
               <li>
                  <span>Location<small>:</small></span>
                  <div className="locright">
                     <span>Anand Niketan</span>
                     <span>  Anand Niketan</span>
         <a >Chanakya Puri</a>,
         <a >Connaught Place</a>,
        
                  </div>
               </li>
               <li>
                  <span>Fees:<small>:</small></span>
                  <div className="locright">
                     <span>INR 900/hr</span>
                  </div>
               </li>
               <li>
                  <span>Distance:<small>:</small></span>
                  <div className="locright">
                     <span>8.8 KM</span>
                  </div>
                  <div className="tooltip_block_display">
                     <p>Distance 8.8 km from Delhi </p>
                  </div>
               </li>
            </ul>
            <div className="morelaytopinfo">
               <ul>
                  <li>Home Tutor</li><small>:</small>
                  <li>Activity Score - 750</li>
               </ul>
            </div>
         </div>
      </div>
      <div className="topbottom_section">

         <div className="teaches_block">
            <span>Teaches:</span>
            <div className="right_subject">
               <a href="#" className="active">Mathematics </a><a href="#">History</a>
               <a href="#">Hindi</a><a href="#">Vedic Maths</a>
            </div>
            <a href="#" className="viewfull viesubject downsubjectmore" style={{color:'darkblue'}}> + 15 More Subjects
        </a>
         </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',fontSize:'14px'}}>
      <a href="#" className="outline_btn" target="_blank">View More</a>
            <a href="#" className="fill_btn" target="_blank" style={{background:'darkblue'}}>REQUEST a CALLBACK</a> <a href="#" className="outline_btn" target="_blank">Send Message</a>
            
      </div>

     
   </div>
</div>





</div>























               </div>

















            </div>
         </div>
      )
   }
}

export default Courses;