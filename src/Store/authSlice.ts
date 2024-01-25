import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface authState {
    token: string;
  }
  const initialState: authState = {
    token: "",
  };
  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      // resetAuth: (state, action: PayloadAction<void>) => {
      
      //   state.token = '';
      // },
      setToken: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      },
    },
   
  });
  
  export const {  setToken } = authSlice.actions;
  
  export default authSlice.reducer;