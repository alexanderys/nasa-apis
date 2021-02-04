import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config';

const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function Apod() {
    console.log('Hello from Apod')
    const [imageObj, setImageObj] = useState({ data: {}, isLoading: false, error: null });

    useEffect(() => {
        console.log('useEffect');
        setImageObj({ isLoading: true })
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(data => setImageObj({ data: data, isLoading: false }))
            .catch(error => setImageObj({ error, isLoading: false }))
    }, []);

    /* Conditional rendering */
    if (imageObj.error) {
        return <p>{imageObj.error.message}</p>;
    }
    if (imageObj.isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="apod">
            <h1 title="NASA AOPD Website"><a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">NASA Astronomy Picture of the Day (AOPD)</a></h1>
            <h2>{imageObj.data.title}</h2>
            <img src={imageObj.data.url} alt="apod" />
            <p>{imageObj.data.explanation}</p>
        </div>
    );
}

export default Apod;