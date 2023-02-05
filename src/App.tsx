import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <Projects />
      <Bio />
      <Contact />
    </div>
  );
}

export default App;
