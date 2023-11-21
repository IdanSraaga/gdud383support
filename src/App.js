import './App.css';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyForm';
import SLA from "./components/SLA"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/sla" element={<SLA />}/>
      </Routes>
    </Router>
  );
}
export default App;
