import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);
  
  const apiKey = process.env.REACT_APP_API_KEY; //api from .env file

  return (
    <Router>
      <div className="App">

        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Navbar />

        <Switch>
          <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={12} country="in" category="general" /></Route>
          <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={12} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={12} country="in" category="general" /></Route>
          <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={12} country="in" category="health" /></Route>
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={12} country="in" category="science" /></Route>
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={12} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={12} country="in" category="technology" /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
