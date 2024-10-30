import React, { useState } from "react";


const Navbar = ({setSearch}) => {
  const [inputMovie, setInputMovie] = useState("");

  

  const handleChange = async(e) => {
    e.preventDefault();
    setInputMovie(p=>e.target.value);
    setSearch(p=>e.target.value)
    // await fetchData();
  };



  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://img.icons8.com/?size=64&id=lEV2xeBg4PUI&format=png"
            alt="Logo"
          ></img>
          <h1>MovieDB</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/top_rated">Top Rated</a>
          </li>
          <li>
            <a href="/upcoming">Upcoming</a>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="Movie Name"
            value={inputMovie}
            onChange={handleChange}
          />
          <button>search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


// https://www.youtube.com/watch?v=xAqCEBFGdYk