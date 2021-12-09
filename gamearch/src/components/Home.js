import React from 'react';
import NoImage from '../images/no-image.png'
import { useGameFetch } from '../hooks/useGameFetch'

const Home = () => {
    const { state, loading, error } = useGameFetch();
    console.log(state)
return (
        <div>
            Home
        </div>
    );
};

export default Home;