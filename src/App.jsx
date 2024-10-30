import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //when click on submit button at that time goes to next page
import Popular from "./components/Navbar/Popular";
import Upcoming from "./components/Navbar/Upcoming";
import TopRated from "./components/Navbar/TopRated";
import { DetailPage } from "./components/DetailPage";
import Card from "./components/Card";
import axios from "axios";
import styled from "styled-components";
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

function App() {
  const [search, setSearch] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
        )
        .then((res) => {
          console.log(res.data.results);
          setMovies(res.data.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />

        <MoviesContainer>
          {search.length > 0 &&
            movies
              .filter((el) => {
                return el.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((elem) => <Card data={elem} key={elem.id} />)}
        </MoviesContainer>

        {search?.length <= 0 && (
          <Routes>
            <Route exact path="/" element={<Popular />}></Route>
            <Route exact path="/upcoming" element={<Upcoming />}></Route>
            <Route exact path="/top_rated" element={<TopRated />}></Route>
            <Route exact path="/detail/:id" element={<DetailPage />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
