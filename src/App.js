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
        <Route exact path="/"><News setProgress={setProgress} key="general" pageSize="12" country="in" category="general" /></Route>
        <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize="12" country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize="12" country="in" category="entertainment" /></Route>
        <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize="12" country="in" category="general" /></Route>
        <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize="12" country="in" category="health" /></Route>
        <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize="12" country="in" category="science" /></Route>
        <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize="12" country="in" category="sports" /></Route>
        <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize="12" country="in" category="technology" /></Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
