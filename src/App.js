import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './auth/Register';
import Otp from './auth/Otp';
import Profile from './profile/Profile';
import Download from './appdownload/Download';

function App() {
  return (
   <>

   <BrowserRouter>
   <Routes>
        <Route path="/" element={<Register />} /> 
        <Route path="/otp" element={<Otp />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/download" element={<Download />} /> 

        
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
