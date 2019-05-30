import React, { useEffect, useState } from "react";
import './App.css';

import MainVid from "./MainVid";

import { UpNextVid, VidList } from "./listvids";




const App = () => {

  const apikey = "AIzaSyBIcLNyOM68sg91y6nl8EytFKcKK-QOGTI";

  const [vidUrl, setVidUrl] = useState([
  ])

  const [query, setQuery] = useState("react");

  const [search, setSearch] = useState("")

  useEffect(() => {
    getvids();
  }, [query])

  const getvids = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&type=video&key=${apikey}`)
      .then(response => {

        return response.json();
      }).then(data => {
        setVidUrl(data.items);
        console.log("data ==>", data.items);
      })

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }



  return (
    // MAIN PAGE
    <div className="MainApp">
      <div className="top">

        <div className="nav-left">
          <img className="YT-logo" src="http://ubs.production.na1.netsuitestaging.com/site/images/logos/yt_logo_rgb_light.png" alt="" width="100px" height="35px" />
        </div>

        <form onSubmit = {getSearch} className="search-form">
          <input className="search-bar" type="text" placeholder="Search" value = {search} onChange={updateSearch} />
          <button className="search-button">Search</button>
        </form>

        <div className="nav-right">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="columns">
        {/* Main Video */}
        <div className="mainVid">
          {
            vidUrl.length > 0 ?
              <MainVid
                vid_url={vidUrl[0].id.videoId}
                title={vidUrl[0].snippet.title}
                discs={vidUrl[0].snippet.discription}
              />
              :
              <p>Wait for One Second Blease</p>
          }
        </div>


        {/* list of videos on the right */}
        <div className="listVid">

          <p className="up_next">Up next</p>
          {
            vidUrl.length > 0 ?
              <UpNextVid
                thumb={vidUrl[1].snippet.thumbnails.default.url}
                th_title={vidUrl[1].snippet.title}
              />
              : null
          }

          <hr />


          {
            vidUrl.length > 0 ?
              vidUrl.map(url => (
                <VidList
                  thumbs={url.snippet.thumbnails.default.url}
                  ths_title = {url.snippet.title}
                  />

              ))
              : null
          }
        </div>
      </div>

    </div>
  );
}

export default App;
