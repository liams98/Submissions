import React, {useEffect, useState} from "react";
import './App.css';

import MainVid from "./MainVid";
import { generateKeyPair } from "crypto";
import { async } from "q";

function App() {

 const appkey = "AIzaSyDYp8XFqoyeJhqqdjKXyVP3-rh5kJibA_4";
  
 
  

//  const getReq = async()=>{
//    const response = await fetch(`https://www.googleapis.com/youtube/v3/search`);
//     const data = response.json();
//     console.log("data => ",data);
//  }

 fetch(`https://www.googleapis.com/youtube/v3/search`)
 .then(response =>{
   response.json();
   console.log(response.json)
 })

  return (
    // MAIN PAGE
    <div className = "MainApp">
      <div className = "top">

        <div className = "nav-left">
          <img className = "YT-logo" src="http://ubs.production.na1.netsuitestaging.com/site/images/logos/yt_logo_rgb_light.png" alt="" width="100px" height = "35px"/>
        </div>

        <form className = "search-form">
          <input className = "search-bar" type="text" placeholder = "Search"/>
          <button className = "search-button">Search</button>
        </form>

        <div className = "nav-right">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className = "columns">
        {/* Main Video */}
        <div className = "mainVid">
          <MainVid />
        </div>


        {/* list of videos on the right */}
        <div className = "listVid">
          {

          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
