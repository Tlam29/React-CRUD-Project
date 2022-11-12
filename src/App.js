import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";



export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Users/>}/>
          <Route  path="/create" element={<CreateUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}