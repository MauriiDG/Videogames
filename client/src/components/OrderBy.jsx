import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { sortBy } from '../redux/actions';
import Loading from './Loading';
import './OrderBy.css';

function OrderBy() {

    const dispatch = useDispatch();

    const loading = useSelector((store) => store.loading)

    
    if (loading) {
    return <Loading />
  }
    

    const handleChange = (event) => {
        dispatch(sortBy(event.target.value));
    }

  return (
    <div>
        <select onChange={handleChange} className='selector'>
            <option value={0}>Order By</option>
            <option value='name'>Name A-Z</option>
            <option value='-name'>Name Z-A</option>
            <option value='-rating'>Rating 5-0</option>
            <option value='rating'>Rating 0-5</option>
        </select>
    </div>
  )
}

export default OrderBy