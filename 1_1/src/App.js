import './App.css';
import UnorderedList from './components/UnorderedList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UnorderedList amount={3}/>
      </header>
    </div>
  );
}

export default App;
