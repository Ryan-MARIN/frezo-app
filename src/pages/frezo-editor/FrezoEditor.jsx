import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FrezoEditor = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Frézo Editor`;
  }, [location]);
  
  return (
    <h1>Frezo Editor<div>Créez vos propres lettres frézo !</div></h1>
  )
}

export default FrezoEditor