import React, { useState, useEffect } from 'react';
import NoImage from '../images/no-image.png'
import {FetchGames} from '../API';
import dotenv from "dotenv";
dotenv.config();

const Home = () => {
    const [state, setstate] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchGames = async (page, search = "") => {
        try {
            setError(false)
            setLoading(true)
            const games = await FetchGames(search, page);
            setstate(prev =>({
                ...games,
                results:
                page > 1 ? [...prev.results, ...games.results]: [games.results]
            }))
                    
        } catch (error) {
            setError(true)
        }
        setLoading(false)

    }

    useEffect(() => {
        fetchGames(1)
    }, [])

    console.log(state)

return (
        <div>
            Home
        </div>
    );
};

export default Home;