import React from "react"
import { useHistory,Link } from "react-router-dom"



export default function Home() {
   let history = useHistory();
 const  tution = () => {
      history.push("/teacher-form");

   }
  const Courses = () => {
   history.push("/courses");
  } 

  const Job = () => {
   history.push("/jobs");
  }
   return (
      <div class="container">
         <div className="row">
            <div class="container text-center">
               <h3 class=" margin-top-bottom">Looking to teach?</h3>
               <p class="hwDesc">Join Knowlarity.com and connect with more than 25 Lakh students on the platform. Create a strong profile and grow your network.
               From Maths to Music, from Abacus to Accounting, from Spanish to Sanskrit, from Computers to Chess, for tiny tots or for seasoned professionals - there are thousands of dedicated tutors on LearnPick for you to choose from.
    </p>
               <p class="hwDesc">
                  Live in a small town with very few good tutors? No problem, the best tutors from Mumbai, Delhi and Bangalore will be at your service through our world-class online video tutoring
    system!</p>
               <button type="button" class="btn btn-primary  margin-top-10" style={{fontSize:'18px'}}
                onClick ={tution}>Signup as a Tutor</button>
            </div>
         </div>

         <div className="row">

            <div class="pageLayoutContainer textAlignCen" id="homeHowItWorks">
               <div class="howItWrkSteps">
                  <span class="indStep activeStep">
                     <span class="stepNum">1</span>
                     <span class="hwStepTxt">Post</span>
                  </span>
                  <span class="stepLine"></span>
                  <span class="indStep">
                     <span class="stepNum">2</span>
                     <span class="hwStepTxt getResTxt">Get responses</span>
                  </span>
                  <span class="stepLine"></span>
                  <span class="indStep">
                     <span class="stepNum">3</span>
                     <span class="hwStepTxt">Finalise</span>
                  </span>
               </div>

               <div class=" row">
                  <div class="col-lg-3 col-sm-12 ">
                     <img src="https://c.urbanpro.com/assets/new-ui/uphomepage/post_req_htw-bba0bdc8231ed8a191cacbaa02f6c7e9.png" class="lazyImage img-fluid" />
                     <p class="hwTitle">Post your learning requirement</p>
                     <p class="hwDesc">Want to learn something? Just enter<span className='new-line'></span>details such as subject or category,<span className='new-line'></span>locality and preference.</p>
                  </div>

                  <div class="col-lg-3 col-sm-12 centerworks ">
                     <img src="https://c.urbanpro.com/assets/new-ui/uphomepage/cust_resp_htw-8e8f0ce2b1561cf63fd29ba0db981caa.png" class="lazyImage img-fluid" />
                     <p class="hwTitle">Get customised responses</p>
                     <p class="hwDesc">Based on your requirement you will start<span className='new-line'></span>getting customised responses from tutors and<span className='new-line'></span>institutes.</p>
                  </div>

                  <div class="col-lg-3 mt-3 col-sm-12">
                     <img src="https://c.urbanpro.com/assets/new-ui/uphomepage/compare_htw-49cec889d54385863c232c77ddce11ee.png" class="lazyImage img-fluid " />
                     <p class="hwTitle">Compare &amp; select the best</p>
                     <p class="hwDesc">Once you get responses, you can<span className='new-line'></span>compare them and choose the ones that<span className='new-line'></span>fit your learning requirement.</p>
                  </div>
               </div>

               <p class="howWrkUpTxt only-for-big">Knowlarity.com is India’s largest online platform with a network of most trusted local Tutors across India.
			<span className='new-line'></span>Post and connect with the tutors in your locality.</p>



               <div class="postLinkBlck">
                  <Link to='/student-form12' class="primaryButton postReqHwWrk">Post your learning requirement</Link>
               </div>

            </div>
         </div>


         <div className="row">
            <h3 class=" margin-top-bottom text-center ">Find Personalised &amp; 1-to-1 Classes with Online or nearby Tutors</h3>
            <ul id="rig">
               <li className='col-sm-12'>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/1.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Tutions Classes</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/2.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Dance Classes</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/3.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Languages Classes</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/4.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">School Tutions</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/5.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">College Tutions</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/6.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Study Abroad</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/7.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Study in India</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/8.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Other Exams</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/9.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Programming Languages</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/10.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">IT Training</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/11.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">Other IT Courses</span>
                  </a>
               </li>
               <li>
                  <a class="rig-cell" href="#">
                     <img class="rig-img" src="http://www.menucool.com/rg/img/12.jpg" />
                     <span class="rig-overlay"></span>
                     <span class="rig-text">All Exam Coaching Classes</span>
                  </a>
               </li>
            </ul>
            <div class="container text-center">
               <button type="button" onClick={Courses} class="btn btn-primary margin-top-bottom" style={{fontSize:'18px'}}>Browse all the courses</button>
            </div>

         </div>

         <div className="row ">
            <div class="container">

               <h3 class="margin-bottom-20 margin-top-10">Popular Job Categories</h3>
               <div class="margin-top-60"></div>
               <div class="categories-boxes-container row">


                  <a href="#" class="category-small-box">
                     <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                     <h4>Accouting / Finance</h4>
                     <span>32</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-meetup" aria-hidden="true"></i>
                     <h4>Automotive Jobs</h4>
                     <span>76</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-handshake-o" aria-hidden="true"></i>
                     <h4>Construction / Facilities</h4>
                     <span>31</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-address-card-o" aria-hidden="true"></i>
                     <h4>Education / Training</h4>
                     <span>76</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-address-book" aria-hidden="true"></i>
                     <h4>Healthcare</h4>
                     <span>32</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-window-restore" aria-hidden="true"></i>
                     <h4>Restarant / Food Service</h4>
                     <span>67</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-wpexplorer" aria-hidden="true"></i>
                     <h4>Transportation / Logistics</h4>
                     <span>45</span>
                  </a>


                  <a href="#" class="category-small-box">
                     <i class="fa fa-user-circle" aria-hidden="true"></i>
                     <h4>Telecommunication</h4>
                     <span>96</span>
                  </a>

               </div>

               <div class=" text-center ">
                  <button type="button" onClick={Job} class="btn btn-primary margin-top-bottom" style={{fontSize:'18px'}}>Browse All Categories</button>
               </div>
               <div class="margin-bottom-55"></div>
            </div>
         </div>

      </div>
   );
}