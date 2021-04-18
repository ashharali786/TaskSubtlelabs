import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import notFound from "./components/pages/notFound";
import AddTask from "./components/pages/AddTask";
import EditTask from "./components/pages/EditTask";
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar className="navBar" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AddTask" component={AddTask} />
          <Route exact path="/EditTask/:id" component={EditTask}/>
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={notFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
