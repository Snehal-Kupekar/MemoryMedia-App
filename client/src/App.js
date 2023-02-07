import React from 'react';
import Home from "./components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile.js";



// here we write function for updatePost button because this is the only component 
// where both state is present POST as well as FORM which is required 

const App = () => {
    

    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<Profile/>}/>
            <Route path = "/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
        
        
        
    );
}

export default App;