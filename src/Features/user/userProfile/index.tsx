import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import {UserProfileForm }from "../../../types/UserProfile"
import {addUsersProfile} from "../../../Store/userProfileSlice"
import { resetAuth } from "../../../Store/authSlice";

import "./index.css"
const UserProfilePage: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm< UserProfileForm>();
      const dispatch = useAppDispatch();
      const onSubmit: SubmitHandler<UserProfileForm> = data =>{
        alert("hi")
        console.log(data)
        dispatch(addUsersProfile(data))
       
        // navigation("/login");
      }
      const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        dispatch(resetAuth())
      }
    return(
    <>
    <div className="container-xl px-4 mt-4">
    {/* <!-- Account page navigation--> */}
    <nav className="nav nav-borders">
        <a className="nav-link active ms-0" href="" target="__blank">Profile</a>
        <a className="nav-link" href="" target="__blank">Billing</a>
        <a className="nav-link" href="" target="__blank">Security</a>
        <a className="nav-link" href=""  target="__blank">Notifications</a>
    </nav>
    <hr className="mt-0 mb-4"/>
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
        </div>
        <div className="col-xl-8">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <!-- Form Group (username)--> */}
                        <div className="mb-3">
                            <label className="small mb-1" >Username (how your name will appear to other users on the site)</label>
                            <input {...register("username")} className="form-control" id="inputUsername" type="text" placeholder="Enter your username"/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >Height</label>
                                <input {...register("height")} className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name"/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >Weight</label>
                                <input {...register("weight")} className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (organization name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >city</label>
                                <input  {...register("city")} className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" />
                            </div>
                            {/* <!-- Form Group (location)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" >State</label>
                                <input {...register("states")} className="form-control" id="inputLocation" type="text" placeholder="Enter your location"/>
                            </div>
                        </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div className="mb-3">
                            <label className="small mb-1" >Address</label>
                            <input {...register("address")} className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" />
                        </div>
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                        <label className="small mb-1" >Family Information</label>
                            <textarea {...register("information")} className="form-control" id="inputEmailAddress"  placeholder="Enter your email address"/>
                            {/* <!-- Form Group (phone number)--> */}
                            {/* <div className="col-md-6">
                                <label className="small mb-1" >Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div> */}
                            {/* <!-- Form Group (birthday)--> */}
                            {/* <div className="col-md-6">
                                <label className="small mb-1" >Birthday</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div> */}
                        </div>
                        {/* <!-- Save changes button--> */}
                        <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    )
}
export default UserProfilePage