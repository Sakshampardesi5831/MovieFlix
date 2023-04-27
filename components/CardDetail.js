import React, { Fragment } from "react";

const CardDetail = (props) => {
  const { detailMovies, setMovies } = props;
  console.log(detailMovies);
  return detailMovies ? (
    <Fragment>
      <div className="detailContainer">
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailMovies.backdrop_path}`}
          alt=""
        />
        <div className="detailContainer_overlayer1">
          <div className="detailContainer_overlayer1-section-1">
            <div className="detailContainer_overlayer1_section-1_poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="detailContainer_overlayer1-section-2">
            <div className="box">
              <div className="detailContainer_overlayer1-section-2_movie-title">
                <h1>{detailMovies.original_title}</h1>
              </div>
              <div className="detailContainer_overlayer1-section-2_tagline">
                 <h3>"{detailMovies.tagline}"</h3>
              </div>
              <div className="detailContainer_overlayer1-section-2_movie-sub-title">
                <h3 className="sub-title_heading">OverView</h3>
                <p className="sub-title_paragraph">{detailMovies.overview}</p>
              </div>
              <div className="detailContainer_overlayer1-section-2_Rating">
                  <h1> <span><i className="ri-star-fill"></i></span> {detailMovies.vote_average}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    "loading"
  );
};

export default CardDetail;
