import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News';

// d98a9e355d3f4580bdf4f04b815ccbf7
// my api key for news api


function App() {
  return (
    <div className="App">
      <Navbar/>
      <News pageSize="12" country="in" category="science"/>
    </div>
  );
}

export default App;
