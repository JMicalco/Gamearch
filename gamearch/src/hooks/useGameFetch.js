import { useState, useEffect } from 'react';
import {FetchGames} from '../API';


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results:0
}

export const useGameFetch = () => {
    const [state, setstate] = useState(initialState)
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

    return { state, loading, error};    
}