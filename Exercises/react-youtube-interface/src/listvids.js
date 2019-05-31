import React from "react";
import "./listvids.css";

export const UpNextVid = ({ thumb, th_title }) => {
    
    
    return (
        <div className="div-vids">
            <div className = "vid-area">
                <a></a>
                <img className="vids" src={thumb} alt="Suggested videos"></img>
            </div>
            <div className = "Text-area">
                <p id = "sideText">{th_title}</p>
            </div>
        </div>
    );
}

export const VidList = ({ thumbs, ths_title, side_Url }) => {
    return (
        <div onClick = { () =>{
            
        }}className="div-vids">
            <div className = "vid-area">
                <img  className="vids" src={thumbs} alt="Suggested Videos" onVideoSelect/>
            </div>
            <div id = "sideText">
                <p className = "textarea">{ths_title}</p>
            </div>

        </div>
    );
}
