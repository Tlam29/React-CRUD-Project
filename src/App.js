import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Users />
    </Router>
  );
}