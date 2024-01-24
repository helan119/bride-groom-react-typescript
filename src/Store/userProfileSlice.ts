import { createSlice } from "@reduxjs/toolkit";
import {UserProfileForm} from "../types/UserProfile"
import { PayloadAction } from "@reduxjs/toolkit";


interface UserProfileState{
    usersProfile:UserProfileForm[];
}
const initialState : UserProfileState ={
    usersProfile:[]
}
export const userprofileSlice = createSlice({
    name: "usersProfile",
    initialState,
    reducers: {
    //   resetUsers: (state, action: PayloadAction<void>) => {t7
    //     state = initialState;
    //   },
      addUsersProfile: (state, action: PayloadAction<UserProfileForm>) => {
        
 
        state.usersProfile.push({
            username: action.payload.username,
            height: action.payload.height,
            weight:action.payload.weight,
            city: action.payload.city,
            states:action.payload.states,
    address:action.payload.address,
    information:action.payload. information,
    profilePic: ""
         
         
   
         
      
         
        });
        
      },
    },
    // extraReducers: (builder) => {
    //   builder.addCase(PURGE, () => {
    //     return initialState;
    //   });
    // },
  });
  
  export const {addUsersProfile} = userprofileSlice.actions;
  
  export default userprofileSlice.reducer;