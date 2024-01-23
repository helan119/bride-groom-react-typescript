import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { userRegisterType } from '../../../types/UserRegistration' //importing the user registration types
import { addRegisteredUser } from '../../../Store/userSlice'; //importing redux store for registered user
import "./index.css"
const RegistrationPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm< userRegisterType>();
      const dispatch = useAppDispatch();
      const onSubmit: SubmitHandler<userRegisterType> = data =>{
        dispatch(addRegisteredUser(data));
        // navigation("/login");
      }
    return(
    <>
   
    <div className="main">

<div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="appointment-form" id="appointment-form">
        <h2>Create a Matrimonial page</h2>
        <div className="form-group-1">
            <input {...register("fullname")} type="text" name="fullname" id="fullname" placeholder="Your Name" required />
            <input  {...register("emailaddress")} type="email" name="emailaddress" id="emailaddress" placeholder="Your Email" required />
            <input {...register("phnnumber")} type="number" name="phnnumber" id="phnnumber" placeholder="Your Phone Number" required />
            <input {...register("password")} type="text" name="password" id="password" placeholder="Your Password" required />
           
        </div>
       
           
       
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