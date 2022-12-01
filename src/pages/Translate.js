import "../styles.css";
import React, { useState, useEffect } from 'react';
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';

export default function Translate() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('');
    const [languagesList, setLanguagesList] = useState([]);
    const [detectLanguageKey, setdetectedLanguageKey] = useState('');
    const getLanguageSource = () =>{
        axios.post('https://translate-plus.p.rapidapi.com/language_detect', {
            q: inputText
        })
        .then((response) => {
            setdetectedLanguageKey(response.data[0].language)
        })
    }

    useEffect(() => {
      axios.get('https://translate-plus.p.rapidapi.com/')
      .then((response) => {
       setLanguagesList(response.data)
      })
      getLanguageSource()
     }, [inputText])

      

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    const translateText = () => {

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post('https://translate-plus.p.rapidapi.com/translate', data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }
  

    return (
        <div>
           
            <div>
                <div>
                    <Form>
                        <Form.Field
                            className='app-body'
                            control={TextArea}
                            placeholder='輸入要翻譯之文字..'
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <select onChange={languageKey}>
                            <option className='app-body'>選擇語言..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                        <Form.Field
                            className='app-body'
                            control={TextArea}
                            placeholder='翻譯結果..'
                            value={resultText}
                        />

                        <Button 
                            color="blue" 
                            size="large" 
                            onClick={translateText}
                        >
                            <Icon name='translate' />
                            翻譯</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}