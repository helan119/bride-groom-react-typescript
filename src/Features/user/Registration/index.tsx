import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
const RegistrationPage: React.FC = () => {
    return(
    <>
   
    <div className="main">

<div className="container">
    <form method="POST" className="appointment-form" id="appointment-form">
        <h2>Create a Matrimonial page</h2>
        <div className="form-group-1">
            <input type="text" name="title" id="title" placeholder="Title" required />
            <input type="text" name="name" id="name" placeholder="Your Name" required />
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
            {/* <div className="select-list">
                <select name="course_type" id="course_type">
                    <option slected value="">Course Type</option>
                    <option value="society">Society</option>
                    <option value="language">Language</option>
                </select>
            </div> */}
        </div>
        {/* <div className="form-group-2">
            <h3>How would you like to bo located ?</h3>
            <div className="select-list">
                <select name="confirm_type" id="confirm_type">
                    <option seleected value="">By phone</option>
                    <option value="by_email">By email</option>
                </select>
            </div> */}
            {/* <div className="select-list">
                <select name="hour_appointment" id="hour_appointment">
                    <option seleected value="">Hours : 8am 10pm</option>
                    <option value="9h-11h">Hours : 9am 11pm</option>
                </select>
            </div> */}
        {/* </div> */}
        {/* <div className="form-check">
            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
            <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree to the  <a href="#" className="term-service">Terms and Conditions</a></label>
        </div> */}
        <div className="form-submit">
            <input type="submit" name="submit" id="submit" className="submit" value="Register Free" />
        </div>
      
        </form>
        <h3>Already have an account?<NavLink to='/Login'> Login</NavLink></h3>
</div>

</div>


    </>)
}
export default RegistrationPage;