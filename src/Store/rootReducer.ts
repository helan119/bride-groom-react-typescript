import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import authReducer from './authSlice'
import userProfileReducer from './userProfileSlice'
const rootReducer = combineReducers({
    userRegister:userReducer,
    auth:authReducer,
    userProfile:userProfileReducer

});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer
// export type RootState = ReturnType<typeof rootReducer>