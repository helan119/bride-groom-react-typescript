
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Features/user/login';
import RegistrationPage from './Features/user/Registration';
import UserProfilePage from './Features/user/userProfile';
const App: React.FC = () => {
  return (
    <div>
    <Routes>
    
        <Route path="/"   element={ <RegistrationPage/>} />
        <Route path="/Login"  element={<Login/>} />
        <Route path="/UserProfilePage"  element={<UserProfilePage/>} />
     
    </Routes>
     
    </div>
  );
};

export default App