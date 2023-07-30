import React, { useState, useEffect } from 'react';
//import './filter.css';

function Filter(props) {
  const [genres, setGenres] = useState([]);
  const [selectedGenreID, setSelectedGenreID] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const url = `${props.BASE_URL}${props.GENRE_LIST}${props.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, [props.BASE_URL, props.GENRE_LIST, props.API_KEY]);

  const handleGenreClick = (genre) => {
    props.setGenreID(genre.id);
    setSelectedGenreID(genre.id);
  };

  const handleAllClick = (zero) => {
    props.setGenreID(zero);
    setSelectedGenreID(zero);
  };

  return (
    <div>
      <h1>Colors:</h1>
      <ul>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={selectedGenreID === genre.id ? 'selected' : ''}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </button>
        ))}
        <button
          className={selectedGenreID === null ? 'selected' : ''}
          onClick={() => handleAllClick(null)}
          >
          All
        </button>

      </ul>
    </div>
  );
}

export default Filter;