import React from 'react';
import AlphabetFrezo from '../../../ressources/alphabet-frezo.json';

const Exercice1 = () => {
    const [currentSymbol, setCurrentSymbol] = React.useState(null);
    const [keyCurrentSymbol, setKeyCurrentSymbol] = React.useState(null);
    const mergeVoyellesConsonnes = { ...AlphabetFrezo['voyelles'], ...AlphabetFrezo['consonnes'] };

    const generateRandomSymbol = () => {
        const keys = Object.keys(mergeVoyellesConsonnes);
        const randomIndex = Math.floor(Math.random() * keys.length);
        const randomKey = keys[randomIndex];
        setKeyCurrentSymbol(randomKey);
        const randomSymbol = mergeVoyellesConsonnes[randomKey];
        setCurrentSymbol(randomSymbol);
    };

    React.useEffect(() => {
        generateRandomSymbol();
    }, []);

    const handleLetterClick = (letter) => {
        if (letter === currentSymbol['francais'][0]) {
            alert("Correct!");
            generateRandomSymbol();
        } else {
            alert("Incorrect. Try again!");
        }
    };

    const renderSounds = () => {
        const buttons = [];

        Object.values(mergeVoyellesConsonnes).forEach((subKey, index) => {
            buttons.push(
                <button key={index} onClick={() => handleLetterClick(subKey['francais'][0])}>
                    {subKey['francais'][0]} ({subKey['phonetique'][0]})
                </button>
            );
        });

        return buttons;
    };

    return (
        <div className="App">
            <h1>Exercice 1</h1>
            {currentSymbol && (
                <p>
                    Frezo: <span className='frezo'>{keyCurrentSymbol}</span><br/>
                    Son: <br/>
                    {renderSounds()}
                </p>
            )}
        </div>
    );
}

export default Exercice1;