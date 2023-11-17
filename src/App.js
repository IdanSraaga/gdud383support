import './App.css';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyForm />} />
      </Routes>
    </Router>
  );
}
export default App;
