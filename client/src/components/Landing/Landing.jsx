import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import css from './Landing.module.css'


export default function Landing() {
    
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/home')
        }, 5000)
    })

    return (
        <div className={css.container}>
            <div className={css.landing}>
                <Link to='/home'>
                    <button className={css.landingButton}>Enter Videogames Page</button>
                </Link>
            </div>
            
        </div>
    )
}