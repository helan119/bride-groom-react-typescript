
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/reduxHooks';

import "./assets/css/style.css"
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Features/user/login';
import RegistrationPage from './Features/user/Registration';
import UserProfilePage from './Features/user/userProfile';
import RegistredUderListing from './Features/admin/registerProfileList'
const App: React.FC = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
   
    <div>
    <Routes>
    
        <Route path="/"   element={ <RegistrationPage/>} />
        <Route path="/Login"  element={<Login/>} />
        {token?(<><Route path="/UserProfilePage"  element={<UserProfilePage/>} />
        <Route path="/RegistredUderListing"  element={<RegistredUderListing/>} /></>): <Route path="/Login"  element={<Login/>} />}
        
     
    </Routes>
     
    </div>
  );
};

export default App