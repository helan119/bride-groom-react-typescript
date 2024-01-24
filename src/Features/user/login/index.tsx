
import React, { useEffect } from "react";
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
    
      const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm<LoginForm>();
    
      const dispatch = useAppDispatch();
    
      const auth = useAppSelector((state) => state.auth);
      const users = useAppSelector((state) => state.userRegister.users);
    
      const navigation = useNavigate();
    
      const generateToken = async (emailaddress: string) => {
        alert('hlo')
        console.log(emailaddress)
        // For demo purposes, create a token on the frontend
        const secretKey = import.meta.env.VITE_SECRET_KEY; // Replace with your actual secret key
        console.log(secretKey)
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
    
      const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        console.log(data)
        const selectedUser = users.filter((user) => user.emailaddress === data.email);
        console.log(selectedUser)
        if (selectedUser && selectedUser.length > 0) {
          // User found. Now check the password.
          let user = selectedUser[0];
console.log(user)
          const hashedEnteredPassword = SHA256(data.password).toString();
          console.log(hashedEnteredPassword)
    
          if (user.password === hashedEnteredPassword) {
            // Verification successful.
            // redirect to home.
            const token = await generateToken(data.email);
            console.log(token)
            dispatch(setToken(token));
            navigation("/UserProfilePage");
          } else {
            setError("password", {
              type: "manual",
              message: "Incorrect password",
            });
          }
        } else {
          setError("email", {
            type: "manual",
            message: "User not found",
          });
        }
      };
    
      useEffect(() => {
        if (auth.token) {
          //Token exists. Redirect to home
          navigation("/UserProfilePage");
        }
      }, [auth.token]);
    

   
    return (
      <div className="main-bg">
      <div className="login-container text-c animated flipInX">
              <div>
                  <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
              </div>
                  <h3 className="text-whitesmoke">Sign In Template</h3>
                  <p className="text-whitesmoke">Sign In</p>
              <div className="container-content">
                  <form  onSubmit={handleSubmit(onSubmit)} className="margin-t">
                      <div className="form-group">
                          <input {...register("email")} type="text" className="form-control" placeholder="Username" required/>
                      </div>
                      <div className="form-group">
                          <input {...register("password")} type="password" className="form-control" placeholder="*****" required/>
                      </div>
                      <button type="submit" className="form-button button-l margin-b">Sign In</button>
      
                      <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                      <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                      <a className="text-darkyellow" href="#"><small>Sign Up</small></a>
                  </form>
                  <p className="margin-t text-whitesmoke"><small> Your Name &copy; 2018</small> </p>
              </div>
          </div>
</div>
       
    );
  };
  
  export default Login;
