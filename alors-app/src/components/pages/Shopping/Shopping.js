import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
//import DedicatedPage from './pages/DedicatedPage';
import New from './New';
//import Apparel from './Apparel';
//import './App.css';

function Shopping() {
    const API_KEY = 'api_key=d62b9f08c7e24702fe7b7bedf129c3e4';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    


  const navigate = useNavigate();

  const navigateToNew = () => {
    navigate('/New');
  };

  // const navigateToApparel = () => {
  //   navigate('/Apparel');
  // };

 

 

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Shapping</h1>
        <ul className="navbar-nav mr-auto">
          <button className="btn btn-info ml-5 border" onClick={navigateToNew}>New</button>
          {/* <button className="btn btn-info ml-2 border" onClick={navigateToMovies}>Movies</button> */}
        </ul>
      </nav>

      <Routes>
        

        <Route path="/New" element={<New
        API_KEY={API_KEY}
        BASE_URL={BASE_URL}
        IMG_URL={IMG_URL}/>} />
        {/* <Route path="/Apparel" element={<Apparel 
        API_KEY={API_KEY}
        BASE_URL={BASE_URL}
        IMG_URL={IMG_URL}/>} /> */}
      </Routes>
    </div>
  );
}

export default Shopping;