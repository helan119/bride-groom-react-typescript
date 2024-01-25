
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignJWT } from "jose";

// import { setToken } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { SHA256 } from "crypto-js";
import { setToken } from "../../../Store/authSlice";
import { useAppSelector,useAppDispatch } from '../../../hooks/reduxHooks';
import { LoginForm } from "../../../types/UserLogin";

import './index.css'
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const users = useAppSelector((state) => state.userRegister.users);

 
    
      const {
        register,
        handleSubmit,
        setError,
        formState: {  },
      } = useForm<LoginForm>();
    
      // useEffect(()=>{
      //   dispatch(resetUsers())
      // },[])
    
    //function for generating a token
      const generateToken = async (emailaddress: string) => {
        // For demo purposes, create a token on the frontend
        const secretKey = import.meta.env.VITE_SECRET_KEY; // Replace with your actual secret key
        const expirationTime = "1h"; // Token expiration time
        const secret = new TextEncoder().encode(secretKey);
        const alg = "HS256";
        const jwt = await new SignJWT({ emailaddress: emailaddress, isadmin: false })
          .setProtectedHeader({ alg })
          .setIssuedAt()
          .setExpirationTime(expirationTime)
          .sign(secret);
        return jwt;
      };
    //form handiling for submiting the user login data
      const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        const selectedUser = users.filter((user) => user.emailaddress === data.email);//for cheking user email is there
        if (selectedUser && selectedUser.length > 0) {
          // User found. Now check the password.
          let user = selectedUser[0];
          let adminUser=selectedUser
          //user and admin can login from the same login cheking where the loged user is admin or not if it admin login to the user listing page
          
if(!(adminUser[0].emailaddress =="admin123@gmail.com")){
          const hashedEnteredPassword = SHA256(data.password).toString();
          console.log(hashedEnteredPassword)
    if((user.password !==hashedEnteredPassword)||(adminUser[0].password !==data.password)||(user.emailaddress !==data.email)||(adminUser[0].emailaddress !=="admin123@gmail.com")){
      alert("invalide password or email address")
    }
          if (user.password === hashedEnteredPassword) {
           
            const token = await generateToken(data.email);
            dispatch(setToken(token));
             // Verification successful.
            // redirect to home. 
            navigation("/UserProfilePage",{ state: { user } });
            
          } else {
            setError("password", {
              type: "manual",
              message: "Incorrect password",
            });
          }
        } else if(adminUser[0].password ===data.password ){
         
          const token = await generateToken(data.email);
          console.log(token)
          dispatch(setToken(token));
          navigation("/RegistredUderListing")

        }} else {
          setError("email", {
            type: "manual",
            message: "User not found",
          });
        }
      };
    
      // useEffect(() => {
      //   if (auth.token) {
      //     //Token exists. Redirect to home
      //     navigation("/UserProfilePage");
      //   }
      // }, [auth.token]);
    

   
    return (
      <div className="main-bg">
      <div className="login-container text-c animated flipInX">
              <div>
                  <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
              </div>
                 
                  <p className="text-whitesmoke">Sign In</p>
              <div className="container-content">
                  <form  onSubmit={handleSubmit(onSubmit)} className="margin-t">
                      <div className="form-group">
                          <input {...register("email")} type="text" className="form-control" placeholder="User email " required/>
                      </div>
                      <div className="form-group">
                          <input {...register("password")} type="password" className="form-control" placeholder="*****" required/>
                      </div>
                      <button type="submit" className="form-button button-l margin-b">Sign In</button>
      
                      <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                      <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                      <a className="text-darkyellow" href="/"><small>Register For Free</small></a>
                  </form>
                  <p className="margin-t text-whitesmoke"><small> Your Name &copy; 2024</small> </p>
              </div>
          </div>
</div>
       
    );
  };
  
  export default Login;
