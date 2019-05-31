import React from "react";
import "./mainvid.css";

function MainVid({vid_url, title,views, discs}){
    return(
        <div>
            <iframe width="100%" height="550px" src={`https://www.youtube.com/embed/${vid_url}`} ></iframe>
            <h1 className = "title">{title}</h1>
            <h2 className = "viewcount">views is here{views}</h2>
            <hr/>
            <p >{discs}</p>
        </div>
    );
}

export default MainVid;