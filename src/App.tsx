import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Bio from './components/Bio';

function App() {

  return (
    <div className="App">
      <Header />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
