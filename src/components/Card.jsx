// Card.js
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

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
  height: 150px;
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

const Card = ({ data }) => {
    const history = useNavigate();

    const navigateOnDetail=(id)=>{
        history(`/detail/${id}`)
      }
  return (
    <CardContainer onClick={()=>navigateOnDetail(data.id)}>
      <Backdrop src={data.backdrop_path} alt={data.original_title} />
      <Content>
        <Poster src={'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/08/44/75/08/44/75/movie_asset_fa1a010e-42c9-4a1f-9e3e-abbe797db7be.jpg'} alt={data.original_title} />
        <Title>{data.title}</Title>
        {/* <Overview>{data.overview}</Overview> */}
        <Stats>
          {/* <span>Release Date: {data.release_date}</span> */}
          <span>Rating: {data.vote_average}</span>
        </Stats>
        {/* <Stats>
          <span>Votes: {data.vote_count}</span>
          <span>Popularity: {data.popularity}</span>
        </Stats> */}
      </Content>
    </CardContainer>
  );
};

export default Card;
