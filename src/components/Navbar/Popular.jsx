import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;


const Popular = () => {
  const [movies, setMovies] = useState([])



  useEffect(()=>{
     fetchData();
  },[]);

  const fetchData = async() => {
    try{
      await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1").then((res) => {
         setMovies(res.data.results);
         
       });

    }catch(err){
      console.log(err)
    }
  };

  return (
    <MoviesContainer >
      {movies.map(el=> <Card key={el.id} data={el} />)}
    </MoviesContainer>
  )
}

export default Popular