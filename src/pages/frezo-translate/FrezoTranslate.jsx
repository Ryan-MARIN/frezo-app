import React from 'react'

const FrezoTranslate = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [toTranslateText, setToTranslateText] = React.useState('')
    const [translatedTextInfo, setTranslatedTextInfo] = React.useState({});
    const apiLink = 'https://api2.unalengua.com/ipav3';

    const translate = (toTranslate) => {
        setTranslatedTextInfo({});
        setIsLoading(true);
        fetch(apiLink, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "text":toTranslate,
                "lang":"fr-CA",
                "mode":true
            })
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                console.log(response['ipa']);
                setTranslatedTextInfo(response);
            })
            .catch(err => {
                console.log("Error"+err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div>
            <h1>Frezo Translate</h1>
            <p>
                <input
                    value={toTranslateText}
                    placeholder='Entrer votre texte à traduire'
                    onChange={e => setToTranslateText(e.target.value)}
                />
                <button onClick={()=>{translate(toTranslateText)}}>Traduire</button>
            </p>
            <p>
                {isLoading ?
                    <span>Loading...</span>
                    :
                    <span>En phonétique: {translatedTextInfo['ipa']}</span>
                }
            </p>
        </div>
    )
}

export default FrezoTranslate