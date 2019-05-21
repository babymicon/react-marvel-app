import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from "./MainLayout";

class App extends Component {
  render() {

     return (
         <div>
             <Router>
                <MainLayout/>
             </Router>
         </div>
     );
  }}

export default App;
