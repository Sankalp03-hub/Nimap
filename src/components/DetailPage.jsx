import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import "./MovieDetail.css";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #1c1c1c;
  color: #fff;
`;

const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Poster = styled.img`
  width: 100px;
  border-radius: 5px;
  margin-top: -50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
`;

const Overview = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #999;
`;

export const DetailPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${"c45a857c193f6302f2b5061c3b85e743"}&language=en-US`
    );
    setMovie(data);
  }, []);
  return (
    <div className="movie-detail">
      <div>
        <img
          src={
            "https://wallpapers.com/images/hd/poster-background-hlybuowt1whxbh2z.jpg"
          }
          alt={`${movie.title} Poster`}
          className="poster"
        />
      </div>

      <div className="content">
        <div className="details">
          <h2>About the Movie</h2>
          <p>{movie.overview}</p>

          <div className="info">
            <div>
              <strong>Genres:</strong> {movie?.genres?.join(", ")}
            </div>
            <div>
              <strong>Release Date:</strong> {movie.releaseDate}
            </div>
            <div>
              <strong>Runtime:</strong> {movie.runtime} mins
            </div>
            <div>
              <strong>Rating:</strong> {movie.voteAverage} / 10 (
              {movie.voteCount} votes)
            </div>
            <div>
              <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
            </div>
            <div>
              <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
            </div>
          </div>

          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="homepage"
          >
            Official Website
          </a>

          <div className="production">
            <h3>Production Companies</h3>
            {movie.productionCompanies?.map((company) => (
              <div key={company.name} className="company">
                <img src={company.logoPath} alt={`${company.name} Logo`} />
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <CardContainer>
    //   <Backdrop src={data.backdrop_path} alt={data.original_title} />
    //   <Content>
    //     <Poster
    //       src={
    //         "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/08/44/75/08/44/75/movie_asset_fa1a010e-42c9-4a1f-9e3e-abbe797db7be.jpg"
    //       }
    //       alt={data.original_title}
    //     />
    //     <Title>{data.title}</Title>
    //     <Overview>{data.overview}</Overview>
    //     <Stats>
    //       <span>Release Date: {data.release_date}</span>
    //       <span>Rating: {data.vote_average}</span>
    //     </Stats>
    //     <Stats>
    //       <span>Votes: {data.vote_count}</span>
    //       <span>Popularity: {data.popularity}</span>
    //     </Stats>
    //   </Content>
    // </CardContainer>
  );
};
