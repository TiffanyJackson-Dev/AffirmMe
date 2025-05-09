import React, { useState } from 'react';
import affirmations from '../data/affirmations';

function DailyAffirmation() {
    const [affirmation, setAffirmation] = useState(getRandomAffirmation());
    
    function getRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    }

    function handleNewAffirmation() {
        setAffirmation(getRandomAffirmation());
    }


    return (
        <div className='daily-container'>
            <h2>✨ Your Daily Affirmation ✨</h2>
            <p className='daily-affirmation'></p>
            <button onClick={handleNewAffirmation}>New Affirmation</button>
        </div>
    );
}

export default DailyAffirmation;