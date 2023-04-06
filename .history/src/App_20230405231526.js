import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';
function App() {

  const ficha_medica = {
      altura:"165cm",
      peso:"70kilos",
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
        <SegundoComponente
          nombre="Damián"
          apellidos="Bermúdez"
          ficha={ficha_medica.map((person)=>{
              <li key={person.id}>
                <span>{person.altura}</span>
              </li>
          })}
        />
      </header>
    </div>
  );
}


export default App;
