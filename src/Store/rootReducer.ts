import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice';
const rootReducer = combineReducers({
    userRegister:userReducer

})
export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer
// export type RootState = ReturnType<typeof rootReducer>