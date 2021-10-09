import logo from './logo.svg';
import './App.css';
import Characters from './components/customers/characters';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Characters />
      </header>
    </div>
  );
}

export default App;
