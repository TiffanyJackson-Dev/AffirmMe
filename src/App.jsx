import { Routes, Route, Link } from 'react-router-dom';
import DailyAffirmation from './pages/DailyAffirmation';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', textAlign: 'center' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/daily">Daily Affirmation</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to AffirmMe</h1>} />
        <Route path="/daily" element={<DailyAffirmation />} />
      </Routes>
    </div>
  );
}

export default App;
