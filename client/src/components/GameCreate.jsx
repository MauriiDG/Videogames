import React, { useState } from 'react'


function GameCreate() {

    const [errors, setErrors] = useState({ form: 'Must complete the form' });

    const [form, setForm] = useState({
        name: '',
        description: '',
        releaseDate: '',
        rating: 0,
        genres: [],
        platforms: []
    });

    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Game Name is required';
        } else if (form.name.length < 4) {
            errors.name = 'Game Name must have at least 4 characters';
        }
        if (!form.description) {
            errors.description = 'Description is required';
        } else if (form.description.length < 8) {
            errors.description = 'Description must have at least 8 characters'
        }
        if (!form.rating) {
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(form.rating)) {
            errors.rating = 'Rating must be between 1 and 5';
        }
        return errors;
    }

  return (
    <div>
        <h2>Add Game</h2>
        <div>
            <form>
                <label>Name:</label>
                <label>Description:</label>
                <label>Release Date:</label>
                <label>Rating:</label>
                <label>Name:</label>
                <label>Platforms:</label>
                <button type='submit'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default GameCreate