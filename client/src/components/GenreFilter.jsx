import axios from 'axios';
import { useState, useEffect } from 'react'
import './GenreFilter.css';

function GenreFilter(props) {

  const [genres, setGenres] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:3001/genres`)
    .then(response => setGenres(response.data))
  }, [])

  if (!genres) return null;

  const handleChange = (event) => {
    props.selected(event.target.value);
}

  return (
    <div>
    <select onChange={handleChange} className='selector'>
      <option value={0}>Select Genre</option>
      {genres.map(genre => ( 
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
    </div>
  )
}

export default GenreFilter