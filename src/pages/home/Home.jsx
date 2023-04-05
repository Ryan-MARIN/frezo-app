import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
      document.title = `Frézo`;
    }, [location]);

    return (
        <div>Home</div>
    )
}

export default Home