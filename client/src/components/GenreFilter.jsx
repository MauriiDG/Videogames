import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGamesByGenre, getGenres } from '../redux/actions';
import './GenreFilter.css';

function GenreFilter() {

  const dispatch = useDispatch();

  const genres = useSelector((store) => store.genres)
  
  const genre = useSelector((store) => store.genre)

  useEffect(() => {
    if (genres == null) {
      dispatch(getGenres())
    }
  })

  if (!genres) return null;

  const handleChange = (event) => {
    dispatch(getGamesByGenre(event.target.value));
}

  return (
    <div>
      <select onChange={handleChange} value={genre ? genre:0} className='selector'>
        <option value={0}>Select Genre</option>
        {genres.map(genre => ( 
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  )
}

export default GenreFilter