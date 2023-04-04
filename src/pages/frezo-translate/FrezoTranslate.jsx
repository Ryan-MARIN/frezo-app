import React from 'react'
import translateJson from '../../ressources/api-apf.json'

const FrezoTranslate = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [toTranslateText, setToTranslateText] = React.useState('')
    const [translatedTextInfo, setTranslatedTextInfo] = React.useState({});
    const [apiPhonetics, setAPIPhonetics] = React.useState('');
    const [apfPhonetics, setAPFPhonetics] = React.useState('');
    const apiLink = 'https://api2.unalengua.com/ipav3';

    React.useEffect(() => {
        if (Object.keys(translatedTextInfo).length > 0) {
            setAPIPhonetics(translatedTextInfo['ipa']);
            setAPFPhonetics(phoneticApiToApf(translatedTextInfo['ipa']).replace(/ˈ|ˌ|[^-]-[^-]/g, '').replace(/-+/g, '-'));
        }
    },[translatedTextInfo]);

    const phoneticApiToApf = (apiText) => {
        const replaceAll = (str, find, replace) => {
            return str.replace(new RegExp(find, 'g'), replace);
        };

        Object.keys(translateJson).forEach((key) => {
            Object.keys(translateJson[key]).forEach((subKey) => {
                const find = subKey;
                const replace = translateJson[key][subKey][1];
                apiText = replaceAll(apiText, find, replace);
            });
        });

        return apiText;
    }

    const searchInfo = (toTranslate) => {
        setTranslatedTextInfo({});
        setIsLoading(true);
        fetch(apiLink, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "text":toTranslate.replace(/-/g, '--'),
                "lang":"fr-CA",
                "mode":false
            })
        })
            .then((response) => response.json())
            .then((response) => {
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
            <div>
                <input
                    value={toTranslateText}
                    placeholder='Entrer votre texte à traduire'
                    onChange={e => setToTranslateText(e.target.value)}
                />
                <button onClick={()=>{searchInfo(toTranslateText)}}>Traduire</button>
            </div>
            <div>
                {isLoading ?
                    <span>Loading...</span>
                    :
                    <div>
                        <p>
                            API: {apiPhonetics} <br/>
                            Frézo: {apfPhonetics}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default FrezoTranslate