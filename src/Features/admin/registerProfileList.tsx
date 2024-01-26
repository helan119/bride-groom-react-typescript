
import {useAppSelector } from "../../hooks/reduxHooks";
import "./index.css"

const  RegistredUderListing: React.FC=()=>{
    let users = useAppSelector((state) => state.userRegister.users);
    // const userProfileData=useAppSelector((state)=>state.userProfile.usersProfile)
    // const usersFullData=[...users,...userProfileData]


   
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
                
                <div className="widget border-0">
                    <div className="widget-add">
                        <img className="img-fluid" src="images/add-banner.png" alt=""/></div>
                </div>
            </div>
        </div>
        <div className="col-lg-9">
            <div className="row mb-4">
               
            </div>
            {/* <div className="job-filter mb-4 d-sm-flex align-items-center">
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
            </div> */}
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
                      <h5> User Name: {user.fullname}</h5>
                      <h3> {user.emailaddress}</h3>
                      <h3>{user.phnnumber}</h3>
                  </div>
                 
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