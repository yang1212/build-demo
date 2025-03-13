import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent'
import ShowCouter from './components/ShowCouter'

function App() {
  return (
    <div className="App">
      <CounterComponent/>
      <ShowCouter/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
