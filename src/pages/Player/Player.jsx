import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""    
  })

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWI2YWVhZGI2M2NiMjc5MjYzMDBkZjFmYzI3YWE5NCIsIm5iZiI6MTc0MzE3NzUyMC45MjMsInN1YiI6IjY3ZTZjNzMwMDI3ZTczNzQwNjAwNTk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUksGXAG2MWKatd6bZhoKOoLHYYrLywWP84Gq3HwJAk",
    },
  };

  useEffect(()=>{
    fetch(
      "https://api.themoviedb.org/3/movie/950387/videos?language=en-US",
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  
  },[])


  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/If_UO5D9SdU"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
