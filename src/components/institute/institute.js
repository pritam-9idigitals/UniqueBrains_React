import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

/* import 'react-dual-listbox/lib/react-dual-listbox.css'; */

import {

  Grid,
  Paper

} from "@material-ui/core";
/* import './students.css' */
import $ from 'jquery'



function Teacher() {
  useEffect(() => {
    $(document).ready(function () {

      var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');
      var allPrevBtn = $('.prevBtn');

      allWells.hide();

      navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
          $item = $(this);

        if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
        }
      });

      allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
      });

      allPrevBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

        /*  $(".form-group").removeClass("has-error");
         for (var i = 0; i < curInputs.length; i--) {
           if (!curInputs[i].validity.valid) {
             isValid = false;
             $(curInputs[i]).closest(".form-group").addClass("has-error");
           }
         } */

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
      });

      $('div.setup-panel div a.btn-primary').trigger('click');
    }



    );
  }, [])



  return (
    <div>
      <div class="container">
        <div className="row">


          <Grid container spacing={0} justify="center" direction="row">

            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                spacing={2}
                className="login-form"
              >
                <Paper
                  variant="elevation"
                  elevation={1}
                  className="login-background"
                  style={{ paddingBottom: '25px' }}
                >

                  <Grid item>
                    <h1 id='heading'>
                      <center /* style={{ fontSize: '24px' }} */>Let us Know About Your Requrements</center></h1>


                    <p className="textAlignCen" /* style={{marginBottom:"12px"}} */>
                      <span className=""></span>
                      <span className="or"></span>
                      <span className=""></span>
                    </p>
                    <p className="proLogin" style={{ marginTop: '40px', fontSize: '16px' }}><center></center></p>
                    <div>
                      {/* ################################################################################# */}


                      <div class="container">
                        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
            </Helmet> */}
                        <div class="stepwizard">
                          <div class="stepwizard-row setup-panel">
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-1" type="button" class="btn btn-primary btn-circle" /* style={{background:'blue',borderColor:'blue'}} */>1</a>
                              {/*  <p><small>Shipper</small></p> */}
                            </div>
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                              {/* <p><small>Destination</small></p> */}
                            </div>
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                              {/* <p><small>Schedule</small></p> */}
                            </div>
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled">4</a>
                              {/* <p><small>Cargo</small></p> */}
                            </div>
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-5" type="button" class="btn btn-default btn-circle" disabled="disabled">5</a>
                              {/* <p><small>Cargo</small></p> */}
                            </div>
                            <div class="stepwizard-step col-xs-3">
                              <a href="#step-6" type="button" class="btn btn-default btn-circle" disabled="disabled">6</a>
                              {/* <p><small>Cargo</small></p> */}
                            </div>
                           {/*  <div class="stepwizard-step col-xs-3">
                              <a href="#step-7" type="button" class="btn btn-default btn-circle" disabled="disabled">7</a>
                              <p><small>Cargo</small></p>
                            </div> */}
                          </div>
                        </div>

                        <form role="form">
                          <div class="panel panel-primary setup-content" id="step-1" style={{ borderColor: 'white' }}>
                            <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                              <h2 class="panel-title">Personal Details</h2>
                            </div>
                            <div class="panel-body">
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Name</label>
                                <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Enter  Name" style={{ height: "none", borderRadius: 'none' }} />
                              </div>
                             {/*  <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="radio-inline">
                                  <input type="radio" name="optradio" style={{ marginTop: '-1px' }} />Male
    </label>
                                <label class="radio-inline">
                                  <input type="radio" name="optradio" style={{ marginTop: '-1px' }} />Female
    </label>
                              </div> */}
                             {/*  <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Date Of Brith</label>
                                <input maxlength="100" type="date" id="inputform" required="required" class="form-control" placeholder="Date Of Brith" />
                              </div> */}
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Mobile Number</label>
                                <input maxlength="100" type="number" id="inputform" required="required" class="form-control" placeholder="Mobile Number" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Whatsapp Number</label>
                                <input maxlength="100" type="number" id="inputform" required="required" class="form-control" placeholder="Whatsapp Number" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Email</label>
                                <input maxlength="100" type="email" id="inputform" required="required" class="form-control" placeholder="Email" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">City</label>
                                <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="City" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Area</label>
                                <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Area" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Pin Code</label>
                                <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Pn Code" />
                              </div>
                              <div class="form-group" style={{ fontSize: '14px' }}>
                                <label class="control-label">Enter your full address</label>
                                <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="mention prefered coaching location" />
                              </div>

                              <div style={{ textAlign: 'center' }}>
                                <button class="btn btn-primary nextBtn" id='btnnext' type="button">Next</button>
                              </div>
                            </div>
                          </div>

                          <div class="panel panel-primary setup-content" id="step-3" style={{ borderColor: 'white' }}>
                            <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                              <h2 class="panel-title">Segment</h2>
                            </div>
                            <p style={{fontFamily:'bold'}}>Select 6 maximun segment</p>
                            <div class="panel-body">

                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>Academic Enrichment</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Application / Enterprise Platform</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Basic Computer / Office</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  Business Training</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>   CA CPT</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>     Certification</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>   Class 1 - 5</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>   Class 5 - 10</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Class 11 - 12</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  English Speaking</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Graphics & Multimedia</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Health & Fitness</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Hobby Classes</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  Languages</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Law Subjects</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  MBA & BBA</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Class 09 - 10</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  College Level</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Competitive Exams</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>  Dance</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Data Science/ DBMS</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}> Engineering Entrance & IITJEE</label><br />
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                              <label for="vehicle1" style={{ paddingInline: '10px', fontSize: "14px", fontWeight: 'normal' }}>Engineering Subjcets</label><br />

                              <div style={{ textAlign: 'center' }}>
                                <button class="btn btn-primary prevBtn " id='btnnext' type="button">Prev</button>
                                <button class="btn btn-primary nextBtn" id='btnnext' type="button">Next</button>
                              </div>
                            </div>
                          </div>

                          <div class="panel panel-primary setup-content" id="step-2" style={{ borderColor: "white" }}>
                            <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                              <h3 class="panel-title">Class Type</h3>
                            </div>
                            <p /* style={{ fontStyle: 'bold' }} */> I am Interested In</p>
                            <div class="panel-body">
                             
                                <input type="radio" id="male" name="gender" value="male" />
                                  <label for="male" style={{ fontSize: '14px',fontWeight:'200' }}>Face to Face Tution</label><br />
                                    <input type="radio" id="female" name="gender" value="female" />
                                      <label for="female" style={{ fontSize: '14px',fontWeight:'200' }}>Online Tution</label><br />
                                        <input type="radio" id="other" name="gender" value="other" />
                                          <label for="other" style={{ fontSize: '14px',fontWeight:'200' }}>Both Face to Face & Online tution</label>
                           
                                        <div style={{ textAlign: 'center' }}>
                                          <button class="btn btn-primary prevBtn " id='btnnext' type="button">Prev</button>
                                          <button class="btn btn-primary nextBtn" id='btnnext' type="button">Next</button>
                                        </div>
                          </div>
                          </div>

                                    <div class="panel panel-primary setup-content" id="step-4" style={{ borderColor: "white" }}>
                                      <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                                        <h2 class="panel-title" >Feees</h2>

                                      </div>
                                      <p>Chooice your fees</p>
                                      <div class="panel-body">
                                      <div class="form-group" /* style={{ fontSize: '14px' }} */>
                                          <label class="control-label" style={{ fontSize: '14px' }}>Rate and Hour</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="My Fees :INR" />
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                          <button class="btn btn-primary prevBtn " id='btnnext' type="button">Prev</button>
                                          <button class="btn btn-primary nextBtn" id='btnnext' type="button">Next</button>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="panel panel-primary setup-content" id="step-5" style={{ borderColor: "white" }}>
                                      <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                                        <h3 class="panel-title">Profile Details</h3>
                                      </div>
                                      <h2>Education</h2>
                                      <div class="panel-body" style={{ padding: '0px' }}>
                                      <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Qualification</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Qualification" />
                                        </div><div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Institute Name</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Institute Name" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Year</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Year" />
                                        </div>
                                        <h2>Tution Experience</h2>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Experience</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Experience" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Tutoring Experience Details</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Minimun charcater : 50" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Tutoring Approch Details</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Minimun charcater : 50" />
                                        </div>

                                        <div style={{ textAlign: 'center' }}>
                                          <button class="btn btn-primary prevBtn " id='btnnext' type="button">Prev</button>
                                          <button class="btn btn-primary nextBtn" id='btnnext' type="button">Next</button>
                                        </div>
                                      </div>
                                    </div>
                                   {/*  <div class="panel panel-primary setup-content" id="step-6" style={{ borderColor: "white" }}>
                                      <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                                        <h3 class="panel-title">Basic Details</h3>
                                      </div>
                                      <div class="panel-body">
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Full Name</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Full Name" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Date of birth</label>
                                          <input maxlength="100" type="date" id="inputform" required="required" class="form-control" placeholder="Class" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Communication address</label>
                                          <input maxlength="100" type="text" id="inputform" required="required" class="form-control" placeholder="Communication address" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">your Area Pin</label>
                                          <input maxlength="100" type="number" id="inputform" required="required" class="form-control" placeholder="Pin Code" />
                                        </div>
                                        <div class="form-group" style={{ fontSize: '14px' }}>
                                          <label class="control-label">Phone Number</label>
                                          <input maxlength="100" type="number" id="inputform" required="required" class="form-control" placeholder="Number" />
                                        </div>
                                        <div class="form-group" >
                                          <div style={{ textAlign: 'center' }}>
                                            <button class="btn btn-primary prevBtn " id='btnnext' type="button">Prev</button>
                                            <button class="btn btn-primary nextBtn" id='btnnext' type="button">Finish</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div class="panel panel-primary setup-content" id="step-6" style={{ borderColor: "white" }}>
                                      <div class="panel-heading" style={{ background: 'none', borderColor: 'white', color: 'black', textAlign: 'center', fontSize: '14px' }}>
                                        <h3 class="panel-title">Finish</h3>
                                        <p>Success</p>
                                      </div>
                                      <div class="panel-body">
                                        <div class="row justify-content-center">
                                          <div class="col-4"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" /> </div>
                                        </div>
                                        <p style={{textAlign:'center'}}>Your Requirement has been posted successfully</p>

                                      </div>
                                    </div>
                        </form>
                    </div>

                                {/* ################################################################################# */}


                              </div>
                  </Grid>
                </Paper>
            </Grid>
          </Grid>
          </Grid>
      </div>
    </div>
    </div >


  )
}

export default Teacher

