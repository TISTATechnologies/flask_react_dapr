import logo from './logo.svg';
import './App.css';
import Axios from "./axios_component";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The below clock comes from a Python flask app</p>
        <Axios />
      </header>
    </div>
  )
}

export default App;
