import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from './components/Cards';
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' component={Cards} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
