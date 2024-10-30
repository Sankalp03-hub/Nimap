import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

const UpcomingMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const Upcoming = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    upcomingMovieData();
  }, []);

  const upcomingMovieData = async () => {
    try {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
        )
        .then((res) => {
          setUpcomingMovie(res.data.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const navigateOnDetail = () => {
    history("/detail/:id");
  };
  return (
    <UpcomingMoviesContainer onClick={navigateOnDetail}>
      {upcomingMovie.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </UpcomingMoviesContainer>
  );
};

export default Upcoming;
