import React from 'react';
import AlphabetFrezo from '../../../ressources/alphabet-frezo.json';

const Exercice1 = () => {
    const [currentSymbol, setCurrentSymbol] = React.useState(null);

    const generateRandomSymbol = () => {
        const randomIndex = Math.floor(Math.random() * AlphabetFrezo['chiffres'].length);
        const randomSymbol = AlphabetFrezo['chiffres'][randomIndex];
        setCurrentSymbol(randomSymbol);
    };

    React.useEffect(() => {
        generateRandomSymbol();
    }, []);

    const handleLetterClick = (number) => {
        if (number === currentSymbol) {
            alert("Correct!");
            generateRandomSymbol();
        } else {
            alert("Incorrect. Try again!");
        }
    };

    const renderNumbers = () => {
        const buttons = [];

        Object.values(AlphabetFrezo['chiffres']).forEach((number, index) => {
            buttons.push(
                <button key={index} onClick={() => handleLetterClick(number)}>
                    {number}
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
                    Frezo: <span className='frezo'>{currentSymbol}</span><br/>
                    Son: <br/>
                    {renderNumbers()}
                </p>
            )}
        </div>
    );
}

export default Exercice1;