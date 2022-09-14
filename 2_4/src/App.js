import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='CheckboxContainer'>
          <div className='Checkbox'>
            <input type="checkbox" id="check1"/>
            <label htmlFor="check1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus tortor, convallis vitae dignissim eu, congue quis odio. Proin dapibus lobortis tellus, ac sagittis nisl hendrerit eget. Donec volutpat lorem mi</label>
          </div>
          <div className='Checkbox'>
            <input type="checkbox" id="check2"/>
            <label htmlFor="check2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus tortor, convallis vitae dignissim eu, congue quis odio. Proin dapibus lobortis tellus, ac sagittis nisl hendrerit eget. Donec volutpat lorem mi</label>
          </div>
          <div className='Checkbox'>
            <input type="checkbox" id="check3"/>
            <label htmlFor="check3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus tortor, convallis vitae dignissim eu, congue quis odio. Proin dapibus lobortis tellus, ac sagittis nisl hendrerit eget. Donec volutpat lorem mi</label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
