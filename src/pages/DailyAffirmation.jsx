import React, { useState } from 'react';
import affirmations from '../data/affirmation';
import '../App.css';


function DailyAffirmation() {
    const [affirmation, setAffirmation] = useState(getRandomAffirmation());
    
    function getRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    }

    function handleNewAffirmation() {
        setAffirmation(getRandomAffirmation());
    }

    function handleSpeak(){

        window.speechSynthesis.cancel();
        
        const speech = new SpeechSynthesisUtterance(affirmation);

        speech.pitch = 1;
        speech.rate = 1;

        window.speechSynthesis.speak(speech);
    }


    return (
        <div className='daily-container'>
            <h2>Your Daily Affirmation</h2>
            <p className='daily-affirmation'>{affirmation}</p>
            <button onClick={handleNewAffirmation}>New Affirmation</button>
            <button type="button" onClick={handleSpeak}>Speak Affirmation</button>
        </div>
    );
}

export default DailyAffirmation;