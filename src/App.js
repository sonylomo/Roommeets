import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import SwipeBtns from "./components/SwipeBtns";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat"></Route>
          <Route path="/">
            <Cards />
            <SwipeBtns />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
