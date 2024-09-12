import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import './banner.css'

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error  ", error);
      }
    })();
  }, []);

  function cut(str , n ){
    return str?.length > n ? str.substr(0, n-1) + '...': str;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-btn">
            <button className="play-btn">Play</button>
            <button className="list-btn">My List</button>
          </div>
          <h1 className="banner-description"> {cut(movie?.overview, 150)}</h1>
        </div>
        <div className="banner-fade" ></div>
      </div>
     
    </>
  );
}

export default Banner;
