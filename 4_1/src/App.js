import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserCard 
          name="Franco Mercado"
          age={22}
          dni={"12.456.789"}
        />
      </header>
    </div>
  );
}

export default App;
