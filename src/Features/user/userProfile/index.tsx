import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import {UserProfileForm }from "../../../types/UserProfile"
import {addUsersProfile} from "../../../Store/userProfileSlice"
import { resetAuth } from "../../../Store/authSlice";
import { resetUsers } from "../../../Store/userProfileSlice";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import "./index.css"
const UserProfilePage: React.FC = () => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const location = useLocation()
    const userData = location.state?.user ;
    // const token = useAppSelector((state) => state.auth.token);
    const {
        register,
        handleSubmit,
        setValue,
        formState: {  },
      } = useForm< UserProfileForm>();
      const dispatch = useAppDispatch();
      const navigation =useNavigate();

      const onSubmit: SubmitHandler<UserProfileForm> = data =>{
         dispatch(resetUsers())
        dispatch(addUsersProfile(data))
      }
     //image upload
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
          // Read the file as a data URL
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result as string);
            setValue("profilePic", reader.result as string);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewImage(null);
          setValue("profilePic", null);
        }
      };
      //
      const handleLOgOut= () => {
        dispatch(resetAuth())//reset the token
        // dispatch(resetUsers())
        // token=""
        navigation("/Login")
      }
    return(
    <>
    <div className="container-xl px-4 mt-4">
    {/* <!-- Account page navigation--> */}
    <nav className="nav nav-borders">
        <a className="nav-link active ms-0" href="" target="__blank">Profile</a>
        <a className="nav-link" href="" target="__blank">Home</a>
        <a className="nav-link" href="" target="__blank">Settings</a>
        <a className="nav-link" href=""  target="__blank">Notifications</a>
    </nav>
    <hr className="mt-0 mb-4"/>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
       
        <div className="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                    {/* <!-- Profile picture image--> */}
                    {previewImage ? (
                    <img className="img-account-profile rounded-circle mb-2" src={previewImage} alt=""/>): <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>}
                    {/* <!-- Profile picture help block--> */}
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* <!-- Profile picture upload button--> */}
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
            </div>
            <div className="card mb-4 mb-xl-0">

                <div className="card-body text-center">
                   
                    <button className="btn btn-primary" type="button" onClick={handleLOgOut}>LogOut</button>
                </div>
            </div>
            <div className="card-header">Account Details</div>
            <div className="card mb-4 mb-xl-0">
            <div className="card-body text-center">
            <label className="small mb-1" >Full Name :  {userData.fullname}</label>
            <label className="small mb-1" >Email Adrress :   {userData.emailaddress}</label>
            <label className="small mb-1" >Phone Number :   {userData.phnnumber}</label>
           
</div>
</div>
        </div>
        <div className="col-xl-8">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                   
                        {/* <!-- Form Group (username)--> */}
                        <div className="mb-3">
                            <label className="small mb-1" >Username </label>
                            <input {...register("username",  { required: "username is required"})} className="form-control" id="inputUsername" type="text" placeholder="Enter your username"/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >Height</label>
                                <input {...register("height", { required: "height is required"})} className="form-control" id="inputFirstName" type="text" placeholder="Enter your height"/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >Weight</label>
                                <input {...register("weight", { required: "weight is required"})} className="form-control" id="inputLastName" type="text" placeholder="Enter your weight" />
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (organization name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >city</label>
                                <input  {...register("city",{ required: "city is required"})} className="form-control" id="inputOrgName" type="text" placeholder="Enter your city" />
                            </div>
                            {/* <!-- Form Group (location)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >State</label>
                                <input {...register("states",{ required: "state is required"})} className="form-control" id="inputLocation" type="text" placeholder="Enter your state"/>
                            </div>
                        </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div className="mb-3">
                            <label className="small mb-1" >Address</label>
                            <input {...register("address",{ required: "address is required"})} className="form-control" id="inputEmailAddress" type="text" placeholder="Enter your  address" />
                        </div>
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                        <label className="small mb-1" >Family Information</label>
                            <textarea {...register("information",{ required: "information is required"})} className="form-control"   placeholder="Enter your familyinformations"/>
                            
                        </div>
                        {/* <!-- Save changes button--> */}
                        <button className="btn btn-primary" type="submit">Save changes</button>
                   
                </div>
            </div>
        </div>
      
    </div>
    </form>
</div>
    </>
    )
}
export default UserProfilePage