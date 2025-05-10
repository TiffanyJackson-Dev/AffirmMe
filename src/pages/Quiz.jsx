import { useState } from 'react';

function Quiz() {
    const [mood, setMood] = useState('');
    const [affirmation, setAffirmation] = useState('');

    const affirmationsByMood = {
        stressed: "I release tension and welcome peace into my day.",
        tired: "I give myself permission to rest and recharge.",
        unmotivated: "Small steps still move me forward.",
        confident: "I trust in my ability to overcome challenges.",
        grateful: "I am thankful for this moment and all that I have."
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAffirmation(affirmationsByMood[mood] || "Please select a mood.");
    };

    function handleSpeak() {
        if (!affirmation) return;

        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(affirmation);
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    }

    return (
        <div className="daily-container">
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
            <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">-- Select Mood --</option>
                <option value="stressed">Stressed</option>
                <option value="tired">Tired</option>
                <option value="unmotivated">Unmotivated</option>
                <option value="confident">Confident</option>
                <option value="grateful">Grateful</option>
            </select>
            <br /><br />
            <button type="submit">Get Affirmation</button>
        </form>

        {affirmation && (
            <><p className="daily-affirmation" style={{ marginTop: '2rem' }}>{affirmation}</p><button type="button" onClick={handleSpeak}>Speak Affirmation</button></>
        )}
        </div>
    );
}

export default Quiz;