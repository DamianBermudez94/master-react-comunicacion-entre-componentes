import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
function App() {

  const ficha_medica = {
      nombre:"Damian",
      apellidos:"Bermudez",
      estado:"Bueno"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimerComponente
          nombre="Damian"
          apellidos="Bermudez"
          ficha={ficha_medica}
        
        />
      </header>
    </div>
  );
}


export default App;
