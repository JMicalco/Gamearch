import React, { useState, useEffect } from 'react';
import NoImage from '../images/no-image.png'
import { API_URL, API_KEY } from '../API';

const Home = () => {
    const [state, setstate] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchGames = async (page, search = "") => {
        try {
            setError(false)
            setLoading(true)

            const games = await fetch(`${API_URL}games?key=${API_KEY}&page=1`, {
                method: "GET",
                headers: new Headers({ 'Content-type': 'application/json'}),
                mode: 'no-cors'
            })
            const json = await games.json()
            console.log(json.results)


            
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchGames(1)
    }, [])

return (
        <div>
            Home
        </div>
    );
};

export default Home;