import { createSlice } from "@reduxjs/toolkit";
import { userRegisterType } from "../types/UserRegistration";
import { PayloadAction } from "@reduxjs/toolkit";
import { SHA256 } from "crypto-js";

interface UserRegistrerState{
    users:userRegisterType[];
}
const initialState : UserRegistrerState ={
    users:[ ]
}
export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    //   resetUsers: (state, action: PayloadAction<void>) => {t7
    //     state = initialState;
    //   },
      addRegisteredUser: (state, action: PayloadAction<userRegisterType>) => {
        let hashedPassword:any
        if (action.payload.password) {
          hashedPassword = SHA256(action.payload.password);
        }
  
        state.users.push({
            fullname: action.payload.fullname,
            emailaddress: action.payload.emailaddress,
            phnnumber:action.payload.phnnumber,
            password:  hashedPassword,
            isadmin:false
         
         
   
         
        //   isAdmin: action.payload.isAdmin || false,
         
        });
        
      },
    },
    // extraReducers: (builder) => {
    //   builder.addCase(PURGE, () => {
    //     return initialState;
    //   });
    // },
  });
  
  export const { addRegisteredUser } = userSlice.actions;
  
  export default userSlice.reducer;