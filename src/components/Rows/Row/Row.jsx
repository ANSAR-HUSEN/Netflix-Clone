import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge,loigicalTrailer, setLogicalTrailer }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        // console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error is  ", error);
      }
    };
    fetchData();
  }, [fetchUrl]);
  //    console.log(movies.name );

  const clickevent = (movies) => {
    // event.preventDefault()
    console.log(movies);
    if (trailer) {
      setTrailer("");
      setLogicalTrailer("")
    } else {
      movieTrailer(movies?.title || movies?.original_name || movies?.name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
          console.log(urlParams.get("v"));
          setLogicalTrailer(title)
        }
      );
    }
  };

  const opts = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies?.map((movie, index) => {
            const imgpath = isLarge ? movie.poster_path : movie.backdrop_path;

            return imgpath ? (
              <img
                onClick={() => clickevent(movie)}
                className={`row__poster ${isLarge && "row__posterlarge"}`}
                src={`${base_url}${imgpath}`}
                alt={movie.name}
                key={index}
              />
            ) : null;
          })}
          ;
        </div>
        <div style={{ padding: "40px" }}>
          {trailer && loigicalTrailer === title && <YouTube videoId={trailer} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;
