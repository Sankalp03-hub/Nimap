import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Card from '../Card';
import { useNavigate } from 'react-router-dom';

const TopRatedMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;


const TopRated = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const history = useNavigate();


  useEffect(() => {
    topRatedMovieData();
  }, []);

  const topRatedMovieData = async () => {
    try{
      await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1").then((res) => {

         setTopRatedMovie(res.data.results);
       });
  
    }catch(err){
      console.log(err)
    }
  };
  const navigateOnDetail=()=>{
    history("/detail/:id")
  }

  return (
    <TopRatedMoviesContainer onClick={navigateOnDetail}>
    {topRatedMovie.map(el=> <Card key={el.id} data={el} />)}
  </TopRatedMoviesContainer>

);
};

export default TopRated;
