
import './App.css';
import {React,createContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from './Lists';
import Account from './Account';
import Navigation from './Navigation';
import User from './User';
function App() {
  return (
    <div>
      
    <BrowserRouter>
     <Navigation/>
     
      <Routes>
        
        <Route path="/account" element={<Account/>} />
        <Route path="/lists" element={<Lists/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
