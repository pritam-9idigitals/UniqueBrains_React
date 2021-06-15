import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import Search from './Search'

const Header = ()=> {
   const [value,setValue] = useState("");
      
   const handleSearch = (event)=> {
      event.preventDefault();
      window.location.href = "/empskills";
      
   }
 const onsearchChange=(event)=>{
      setValue(event);
      console.log(setValue);
   }

   
      return (
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 col-md-12   pt-4 pb-2">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                     <a href="/" className="navbar-brand">
                        <img src="./Logos.png" alt="Girl in a jacket" className="form-logo img-fluid" width="200px" height="44" />
                     </a>
                  </div>

                  <div className="col-lg-5 col-md-7 col-sm-7 pl-4 pr-0 navSearchBar ">
                     <form className="search"> <i className="fa fa-search"></i>
                        <Search searchChange={onsearchChange}/>
                        <button type='submit' className="btn btn-primary" style={{fontSize:'18px'}} >Search</button>
                     </form>
                  </div>

                  <div className="col-lg-4 col-md-2 col-sm-2 pr-0 pl-0">
                     <Navbar className=" float-right " variant="light" expand="lg" sticky="top">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav m-0" /* style={{visibility:"visible !important"}} */>
                           <Nav className="mr-auto">






                              <Link class="outline_btn login" className="color-dim"  style={{fontSize:'18px'}} to="/">Home</Link>
                              <Link to ="/signin" className="outline_btn login" style={{fontSize:'18px'}}>Login</Link>
                              <Link to="/signup" className="fill_btn text-right"  style={{fontSize:'18px'}}>Sign Up</Link>


                           </Nav>
                        </Navbar.Collapse>
                     </Navbar>
                  </div>
               </div>









            </div>

            <aside class="sidebar leftmenus">
               <div class="toggle">
                  <a href="#" class="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                     <span></span>
                  </a>
               </div>
               <div class="side-inner">

                  <div class="logo-wrap">
                     <div class="logo">
                        <span>C</span>
                     </div>
                     <span class="logo-text">Knowlarity.com</span>
                  </div>

                  <div class="search-form">
                     <form action="#">
                        <span class="wrap-icon">
                           <span class="icon-search2"></span>
                        </span>
                        <input type="text" class="form-control" placeholder="Search..." />
                     </form>
                  </div>
                  <div class="nav-menu">
                     <ul>
                        <li class="active"><a href="#" class="d-flex align-items-center"><span class="wrap-icon icon-home2 mr-3"></span><span class="menu-text">Home</span></a></li>
                        <li><a href="/courses" class="d-flex align-items-center"><span class="wrap-icon icon-videocam mr-3"></span><span class="menu-text">Courses</span></a></li>
                        <li><a href="#" class="d-flex align-items-center"><span class="wrap-icon icon-book mr-3"></span><span class="menu-text">Success Stories</span></a></li>
                        <li><a href="#" class="d-flex align-items-center"><span class="wrap-icon icon-shopping-cart mr-3"></span><span class="menu-text">Write A review</span></a></li>
                        <li><a href="#" class="d-flex align-items-center"><span class="wrap-icon icon-pie-chart mr-3"></span><span class="menu-text">All Categories</span></a></li>
                        <li><a href="#" class="d-flex align-items-center"><span class="wrap-icon icon-cog mr-3"></span><span class="menu-text">Help Center</span></a></li>
                     </ul>
                  </div>
               </div>

            </aside>

         </div>
      )
   
}

export default Header;