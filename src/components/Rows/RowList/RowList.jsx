import React, { useState } from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

function RowList() {
  const [loigicalTrailer, setLogicalTrailer] = useState(null);
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        loigicalTrailer = {loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
        isLarge
      />
      <Row
        title=" Trending Now "
        fetchUrl={requests.fetchTrending}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Top Rated Movies "
        fetchUrl={requests.fetchTopRatedMovies}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Action Movies "
        fetchUrl={requests.fetchActionMovies}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Comedy Movies "
        fetchUrl={requests.fetchComedyMovies}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Horror Movies "
        fetchUrl={requests.fetchHorrorMovies}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Romance Movies "
        fetchUrl={requests.fetchRomanceMovies}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Documentaries "
        fetchUrl={requests.fetchDocumentaries}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title=" Tv show"
        fetchUrl={requests.fetchTvShow}
        loigicalTrailer={loigicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
    </>
  );
}

export default RowList;
