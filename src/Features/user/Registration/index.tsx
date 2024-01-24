import React from 'react'
import * as yup from 'yup';
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import { useNavigate } from "react-router-dom";
import { useAppDispatch ,useAppSelector} from '../../../hooks/reduxHooks';
import { userRegisterType } from '../../../types/UserRegistration' //importing the user registration types
import { addRegisteredUser } from '../../../Store/userSlice'; //importing redux store for registered user
import "./index.css"
const RegistrationPage: React.FC = () => {
  const users = useAppSelector((state) => state.userRegister.users);//calling the register users list from the redux
  const dispatch = useAppDispatch();
 
//using yup for validation purpuses all fields are given as required
const validationSchema = yup.object().shape({
    fullname:yup.string().required("Full Name is required"),
    emailaddress:yup.string().email('Invalid email address')
    .required('Email is required'),
    phnnumber:yup.number().required("Phone is a required field"),
    password:yup.string().required("password is required field"),
   
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userRegisterType>({
    resolver: yupResolver(validationSchema),//validationSchema give to the resolver.use form hook  
  });

    //function call for form submition 
 const onSubmit: SubmitHandler<userRegisterType> = data =>{
      const selectedUserEmail = users.filter((user) => user.emailaddress == data.emailaddress)//filter out the login user details with the mail
    
    //checking whether the email id is already exist if exist an alert pop
      if(selectedUserEmail.length>0){
       alert("email Id already exist try new one")
         }
         //other wise the data will store 
     else{
  dispatch(addRegisteredUser(data));
     }
      }
    return(
    <>
   
    <div className="main">

<div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="appointment-form" id="appointment-form">
        <h2>Create a Matrimonial page</h2>
        <div className="form-group-1">
            <input {...register("fullname")} type="text" name="fullname" id="fullname" placeholder="Your Name"  />
            {errors.fullname && <p style={{color:"red"}}>{errors.fullname.message}</p>}
            <input  {...register("emailaddress")} type="email" name="emailaddress" id="emailaddress" placeholder="Your Email"  />
            {errors.emailaddress && <p style={{color:"red"}}>{errors.emailaddress.message}</p>}
            <input {...register("phnnumber")} type="number" name="phnnumber" id="phnnumber" placeholder="Your Phone Number"  />
            {errors.phnnumber && <p style={{color:"red"}}>{errors.phnnumber.message}</p>}
            <input {...register("password")} type="text" name="password" id="password" placeholder="Your Password"  />
            {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
        </div>
       
           
       
        <div className="form-submit">
            <input type="submit" name="submit" id="submit"  className="form-button button-l submit" value="Register Free" />
        </div>
        <h3>Already have an account?<NavLink to='/Login'> Login</NavLink></h3>
        </form>
        
</div>

</div>


    </>)
}
export default RegistrationPage;