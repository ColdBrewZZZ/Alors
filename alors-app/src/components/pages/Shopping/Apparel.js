import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import Filter from './GenreFilter';
import './Home.css';
import CertificationFilter from './CertificationFilter';
import SearchBar from './SearchBar';
import Loader from './Loader';

function Movies(props) {
  // TMDB
  const API_KEY = props.API_KEY;
  const BASE_URL = props.BASE_URL;
  const IMG_URL = props.IMG_URL;
  const GENRE_LIST = '/genre/movie/list?';
  const certifications = ['R', 'PG-13', 'PG', 'G'];

  const [movieItems, setMovieItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreID, setGenreID] = useState(null); 
  const [certification, setCertification] = useState(null);

  console.log(certification)

  useEffect(() => {
    const API_URL = `${BASE_URL}/discover/movie?certification=${certification}&certification_country=US&include_adult=false&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.desc&with_genres=${genreID}&${API_KEY}`
    
      

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
    <>
      <header className="text-center">
        <h1>Movies</h1>
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

          <main id="main" className="col-md">
            
              {!movieItems.length ? <Loader /> : movieItems && movieItems.map((item) => (
              <CardComponent
                id={item.id}
                image={IMG_URL + item.poster_path}
                title={item.title}
                score={item.vote_average}
                overview={item.overview}
                type={"movie"}
              />
            ))}
          </main>
      </div>

      
    </>
  );
}

export default Movies;