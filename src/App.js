import './App.css';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyForm';
import { Router,Route, Switch } from "react-router";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/survey" component={SurveyForm} />
    </Switch>

    </Router>

  );
}
export default App;
