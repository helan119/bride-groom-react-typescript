import { useState } from "react";
import { useAppDispatch,useAppSelector } from "../../hooks/reduxHooks";
import "./index.css"
import { userRegisterType } from "../../types/UserRegistration";

const  RegistredUderListing: React.FC=()=>{
    const users = useAppSelector((state) => state.userRegister.users);

   
    return(
    <>



<div className="container">
    <div className="row">
        <div className="col-lg-3">
            <div className="sidebar">
                <div className="widget border-0">
                    <div className="search">
                        <input className="form-control" type="text" placeholder="Search Keywords"/>
                    </div>
                </div>
                <div className="widget border-0">
                    <div className="locations">
                        <input className="form-control" type="text" placeholder="All Locations"/>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Date Posted</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#dateposted" role="button" aria-expanded="false" aria-controls="dateposted"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="dateposted">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted1"/>
                                <label className="custom-control-label" >Last hour</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted2"/>
                                <label className="custom-control-label" >Last 24 hour</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted3"/>
                                <label className="custom-control-label" >Last 7 days</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted4"/>
                                <label className="custom-control-label" >Last 14 days</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="dateposted5"/>
                                <label className="custom-control-label" >Last 30 days</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Specialism</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#specialism" role="button" aria-expanded="false" aria-controls="specialism"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="specialism">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism1"/>
                                <label className="custom-control-label" >IT Contractor</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism2"/>
                                <label className="custom-control-label" >Clinical Psychology</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism3"/>
                                <label className="custom-control-label" >Digital &amp; Creative</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism4"/>
                                <label className="custom-control-label">Estate Agency</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="specialism5"/>
                                <label className="custom-control-label" >Graduate</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Job Type</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#jobtype" role="button" aria-expanded="false" aria-controls="jobtype"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="jobtype">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox fulltime-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype1"/>
                                <label className="custom-control-label" >Full Time</label>
                            </div>
                            <div className="custom-control custom-checkbox parttime-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype2"/>
                                <label className="custom-control-label" >Part-Time</label>
                            </div>
                            <div className="custom-control custom-checkbox freelance-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype3"/>
                                <label className="custom-control-label" >Freelance</label>
                            </div>
                            <div className="custom-control custom-checkbox temporary-job">
                                <input type="checkbox" className="custom-control-input" id="jobtype4"/>
                                <label className="custom-control-label" >Temporary</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Experience</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#experience" role="button" aria-expanded="false" aria-controls="experience"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="experience">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience1"/>
                                <label className="custom-control-label" >fresher</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience2"/>
                                <label className="custom-control-label" >Less than 1 year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience3"/>
                                <label className="custom-control-label" >2 Year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience4"/>
                                <label className="custom-control-label" >3 Year</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="experience5"/>
                                <label className="custom-control-label">4 Year</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Offered Salary</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#Offeredsalary" role="button" aria-expanded="false" aria-controls="Offeredsalary"> <i className="fas fa-chevron-down"></i> </a>
                    </div>
                    <div className="collapse show" id="Offeredsalary">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary1"/>
                                <label className="custom-control-label" >10k - 20k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary2"/>
                                <label className="custom-control-label" >20k - 30k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary3"/>
                                <label className="custom-control-label" >30k - 40k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary4"/>
                                <label className="custom-control-label" >40k - 50k</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="Offeredsalary5"/>
                                <label className="custom-control-label">50k - 60k</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Gender</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#gender" role="button" aria-expanded="false" aria-controls="gender"><i className="fas fa-chevron-down"></i></a>
                    </div>
                    <div className="collapse show" id="gender">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="gender1"/>
                                <label className="custom-control-label" >Male</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="gender2"/>
                                <label className="custom-control-label">Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-title widget-collapse">
                        <h6>Qualification</h6>
                        <a className="ml-auto" data-toggle="collapse" href="#qualification" role="button" aria-expanded="false" aria-controls="qualification"> <i className="fas fa-chevron-down"></i></a>
                    </div>
                    <div className="collapse show" id="qualification">
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification1"/>
                                <label className="custom-control-label">Matriculation</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification2"/>
                                <label className="custom-control-label" >Intermediate</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="qualification3"/>
                                <label className="custom-control-label" >Graduate</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget border-0">
                    <div className="widget-add">
                        <img className="img-fluid" src="images/add-banner.png" alt=""/></div>
                </div>
            </div>
        </div>
        <div className="col-lg-9">
            <div className="row mb-4">
                <div className="col-12">
                    <h6 className="mb-0">Showing 1-10 of <span className="text-primary">28 Candidates</span></h6>
                </div>
            </div>
            <div className="job-filter mb-4 d-sm-flex align-items-center">
                <div className="job-alert-bt"> <a className="btn btn-md btn-dark" href="#"><i className="fa fa-envelope"></i>Get job alert </a> </div>
                <div className="job-shortby ml-sm-auto d-flex align-items-center">
                    <form className="form-inline">
                        <div className="form-group mb-0">
                            <label className="justify-content-start mr-2">Sort by :</label>
                            <div className="short-by">
                                <select className="form-control basic-select select2-hidden-accessible" data-select2-id="1"  aria-hidden="true">
                                    <option data-select2-id="3">Newest</option>
                                    <option>Oldest</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        { users.map((user) => (
            <>
  <div key={user.fullname}></div>
  <div className="row">
  <div className="col-sm-6 col-lg-4 mb-4">
      <div className="candidate-list candidate-grid">
          <div className="candidate-list-image">
              <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
          </div>
          <div className="candidate-list-details">
              <div className="candidate-list-info">
                  <div className="candidate-list-title">
                      <h5><a href="candidate-detail.html">{user.fullname}</a></h5>
                  </div>
                  <div className="candidate-list-option">
                      <ul className="list-unstyled">
                          <li><i className="fas fa-filter pr-1"></i>{user.emailaddress}</li>
                          <li><i className="fas fa-map-marker-alt pr-1"></i>{user.phnnumber}</li>
                      </ul>
                  </div>
              </div>
              <div className="candidate-list-favourite-time">
                  <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                  <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1M ago</span>
              </div>
          </div>
      </div>
  </div>
  </div>         
  </>
))};
           
            {/* {users.map((item,index)=>{
            })} */}
 <div className="row">
 <div className="col-sm-6 col-lg-4 mb-4">
     <div className="candidate-list candidate-grid">
         <div className="candidate-list-image">
             <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
         </div>
         <div className="candidate-list-details">
             <div className="candidate-list-info">
                 <div className="candidate-list-title">
                     <h5><a href="candidate-detail.html">Rafael Briggs</a></h5>
                 </div>
                 <div className="candidate-list-option">
                     <ul className="list-unstyled">
                         <li><i className="fas fa-filter pr-1"></i>helan2@gmail.com</li>
                         <li><i className="fas fa-map-marker-alt pr-1"></i>Haines City, FL 33844</li>
                     </ul>
                 </div>
             </div>
             <div className="candidate-list-favourite-time">
                 <a className="candidate-list-favourite order-2" href="#"><i className="far fa-heart"></i></a>
                 <span className="candidate-list-time order-1"><i className="far fa-clock pr-1"></i>1M ago</span>
             </div>
         </div>
     </div>
 </div>

            
</div>
           
           
            <div className="row">
                <div className="col-12 text-center mt-4 mt-sm-5">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                        <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">25</a></li>
                        <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
    )
}
export default RegistredUderListing;