import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// https://images-api.nasa.gov/search?q={q}
// make user search?

// api_key=${API_KEY}
// media_type=image

//const URL = `https://images-api.nasa.gov/search?q=${MYVARIABLE}&media_type=image`;
// with search term "orion" - https://images-api.nasa.gov/search?q=orion&media_type=image

function NasaImage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showTerm, setShowTerm] = useState('');
    //const [imageObj, setImageObj] = useState({ data: {}, isLoading: false, error: null }); --> need differently(?)

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit() {
        setShowTerm(searchTerm);
        setSubmitted(true);
        setSearchTerm('');
    }

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
    }, [submitted]);

    return (
        <div className="image-search">
            <div className="search-section">
                <div>
                    <input
                        type="text"
                        placeholder="Search for..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button onClick={handleSubmit}>
                        <FontAwesomeIcon className="fontSearchIcon" size="2x" icon={faSearch} />
                    </button>
                </div>
            </div>
            { submitted && <h1>Showing results for: "{showTerm}"</h1>}
        </div>
    );
}

export default NasaImage;