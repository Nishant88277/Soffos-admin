import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// --Components--
import Navbar from "./Components/Navbar";
import KnowledgeWrap from "./Components/KnowledgeWrap";
import DashboardWrap from "./Components/DashboardWrap"
import TeamWrap from "./Components/TeamWrap"
import BottomNav from "./Components/BottomNav";

// --style--
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Navbar />
        <Route exact path="/">
          <TeamWrap/>
        </Route>
        <Route exact path="/dashboard">
          <DashboardWrap/>
        </Route>
        <Route exact path="/knowledge">
          <KnowledgeWrap/>
        </Route>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
