import React from 'react';

const Exercice1 = () => {
    const [currentSymbol, setCurrentSymbol] = React.useState({});
    const phoneticData = [
        {
            symbol: "æ",
            letter: "a",
            example: "Avion",
            audio: "/audio/a.mp3",
        },
        {
            symbol: "o",
            letter: "o",
            audio: "/audio/a.mp3",
        },
        {
            symbol: "e",
            letter: "e",
            audio: "/audio/a.mp3",
        },
        {
            symbol: "dj",
            letter: "je",
            audio: "/audio/a.mp3",
        },
    ];

    React.useEffect(() => {
        generateRandomSymbol();
    }, []);

    const generateRandomSymbol = () => {
        const index = Math.floor(Math.random() * phoneticData.length);
        setCurrentSymbol(phoneticData[index]);
    };

    const handleLetterClick = (letter) => {
        if (letter === currentSymbol['letter']) {
            alert("Correct!");
            generateRandomSymbol();
        } else {
            alert("Incorrect. Try again!");
        }
    };

    const renderLetters = () => {
        return phoneticData.map((item, index) => (
            <button key={index} onClick={() => handleLetterClick(item['letter'])}>
                {item['letter']}
            </button>
        ));
    };

    return (
        <div className="App">
            <h1>Phonetic Learner</h1>
            <p>Phonetic Symbol: {currentSymbol.symbol}</p>
            <button>Play Audio</button>
            <div>{renderLetters()}</div>
        </div>
    );
}

export default Exercice1;