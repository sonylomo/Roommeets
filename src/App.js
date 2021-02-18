import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Chats from "./components/Chats";
import Header from "./components/Header";
import SwipeBtns from "./components/SwipeBtns";
import ChatScreen from "./components/ChatScreen"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backBtn="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backBtn="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeBtns />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
