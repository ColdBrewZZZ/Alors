import React, { useState, useEffect } from 'react';
import ItemCard from './components/ItemCard';
import Filter from './components/ColorFilter';
//import './Home.css';
import CertificationFilter from './components/OriginFilter';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';

function New(props) {
  // TMDB
  const API_KEY = 'api_key=d62b9f08c7e24702fe7b7bedf129c3e4';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const GENRE_LIST = '/genre/movie/list?';
  const certifications = ['R', 'PG-13', 'PG', 'G'];

  const [movieItems, setMovieItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreID, setGenreID] = useState(null); 
  const [certification, setCertification] = useState(null);

  console.log(certification)

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?certification=${certification}&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.desc&with_genres=${genreID}&${API_KEY}`
    
      

    const fetchMovies = async () => {
      try {
        const url = searchQuery
          ? `${BASE_URL}/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&${API_KEY}`
          : API_URL;

        const response = await fetch(url);
        const data = await response.json();
        setMovieItems(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [genreID, searchQuery, certification]);

  return (
    <><ul className="navbar-nav mr-auto">
    <button>New</button>
    {/* <button className="btn btn-info ml-2 border" onClick={navigateToMovies}>Movies</button> */}
  </ul>
      <header className="text-center">
        <h1>WHAT'S NEW THIS SEASON</h1>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} />
      </header>

      <div className="row">
          <div className="col-md-3 ml-1">
              <Filter
                BASE_URL={BASE_URL}
                API_KEY={API_KEY}
                GENRE_LIST={GENRE_LIST}
                setGenreID={setGenreID}
              />
              <CertificationFilter
              setCertification={setCertification}
              certifications={certifications}/>
              
            </div>

          <main id="main" className="row">
            
              {!movieItems.length ? <Loader /> : movieItems && movieItems.map((item) => (
              <ItemCard
                id={item.id}
                image={IMG_URL + item.poster_path}
                title={item.title}
                score={item.vote_average}
                //overview={item.overview}
                type={"movie"}
              />
            ))}
          </main>
          <div>
            hi
          </div>
      </div>

      
    </>
  );
}

export default New;