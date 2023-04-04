import React from 'react'
import translateJson from '../../ressources/api-apf.json'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";

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
            setAPFPhonetics(phoneticApiToApf(translatedTextInfo['ipa']).replace(/ˈ|ˌ|-(?=\s)|-[^-]/g, '').replace(/-+/g, '-'));
        }
    },[translatedTextInfo]);

    const phoneticApiToApf = (apiText) => {
        const replaceAll = (str, find, replace) => {
            return str.replace(new RegExp(find, 'g'), replace);
        };

        Object.keys(translateJson['api-apf-frezo']).forEach((key) => {
            Object.keys(translateJson['api-apf-frezo'][key]).forEach((subKey) => {
                const find = subKey;
                const replace = translateJson['api-apf-frezo'][key][subKey][1];
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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
        }}>
            <h1>Frezo Translate</h1>
            <Stack alignItems='center' spacing={2}>
                <TextField
                    variant="outlined"
                    value={toTranslateText}
                    placeholder='Entrer votre texte à traduire'
                    onChange={e => setToTranslateText(e.target.value)}
                />
                <div>
                    <Button variant="contained" onClick={()=>{searchInfo(toTranslateText)}}>Traduire</Button>
                </div>
            </Stack>
            <div>
                {isLoading ?
                    <span>Loading...</span>
                    :
                    <div>
                        <p>
                            <b>API : </b>{apiPhonetics} <br/>
                            <b>Frézo : </b>{apfPhonetics}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default FrezoTranslate