import './App.css';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyComponents/SurveyForm';
import Form from './components/SurveyComponents/Form';

import SLA from "./components/SLA"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorialsPage from './pages/TutorialPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<Form />} />
        <Route path="/sla" element={<SLA />}/>
        <Route path ="/tutorials" element={<TutorialsPage />}/>
      </Routes>
    </Router>
  );
}
export default App;
