
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignJWT } from "jose";

// import { setToken } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { SHA256 } from "crypto-js";
import { useAppSelector } from '../../../hooks/reduxHooks';
import './index.css'
const Login: React.FC = () => {
    interface LoginForm {
        email: string;
        password: string;
      }
    // const users = useAppSelector((state) => state.users.users);
    const user = useAppSelector((state)=>state.userRegister.users)
    console.log(user)
    return (
      <div className="main-bg">
      <div className="login-container text-c animated flipInX">
              <div>
                  <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
              </div>
                  <h3 className="text-whitesmoke">Sign In Template</h3>
                  <p className="text-whitesmoke">Sign In</p>
              <div className="container-content">
                  <form className="margin-t">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" required/>
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control" placeholder="*****" required/>
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
